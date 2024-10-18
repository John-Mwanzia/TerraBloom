"use client";

import { Loader, Search } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import Nav from "../HomeLanding/Nav";

type weatherData = {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
  };
};

export default function Weather({ userId }) {
  const [city, setCity] = React.useState("Nairobi");
  const [weather, setWeather] = React.useState<weatherData | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [icon, setIcon] = React.useState("");
  const [background, setBackground] = React.useState("bg-weather-cloudy");
  const [error, setError] = React.useState(null);

  const backgrounds = {
    day: {
      sunny: "bg-weather-sunny",
      cloudy: "bg-weather-cloudy",
      rainy: "bg-weather-rainy",
      stormy: "bg-weather-stormy",
    },
    night: {
      clear: "bg-weather-night-clear",
      cloudy: "bg-weather-night-cloudy",
      rainy: "bg-weather-night-rainy",
      stormy: "bg-weather-night-stormy",
    },
  };

  const initialCities = [
    "Nairobi",
    "Thika",
    "Mombasa",
    "Kisumu",
    "Eldoret",
    "Nakuru",
  ];

  // get city weather on page load
  useEffect(() => {
    // Check if browser supports geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Use the user's coordinates to fetch weather data
          getWeatherByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location", error);
          // Fallback: Get weather for the default city (Nairobi)
          getCityWeather(city);
        },
      );
    } else {
      // Fallback: Browser doesn't support geolocation
      console.log("Geolocation is not supported by this browser.");
      getCityWeather(city);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  const updateBackground = (data: weatherData) => {
    const isDay = data.current.is_day;
    const conditionCode = data.current.condition.code;

    let selectedBackground = backgrounds.day.sunny; // Default background

    // Determine background based on weather condition code and day/night
    if (isDay === 1) {
      // Day conditions
      if (conditionCode === 1000) {
        selectedBackground = backgrounds.day.sunny; // Clear
      } else if (conditionCode >= 1003 && conditionCode <= 1009) {
        selectedBackground = backgrounds.day.cloudy; // Cloudy conditions
      } else if (conditionCode >= 1180 && conditionCode <= 1195) {
        selectedBackground = backgrounds.day.rainy; // Rainy conditions
      } else if (conditionCode >= 1273 && conditionCode <= 1282) {
        selectedBackground = backgrounds.day.stormy; // Thunderstorm
      }
    } else {
      // Night conditions
      if (conditionCode === 1000) {
        selectedBackground = backgrounds.night.clear; // Clear night
      } else if (conditionCode >= 1003 && conditionCode <= 1009) {
        selectedBackground = backgrounds.night.cloudy; // Cloudy night
      } else if (conditionCode >= 1180 && conditionCode <= 1195) {
        selectedBackground = backgrounds.night.rainy; // Rainy night
      } else if (conditionCode >= 1273 && conditionCode <= 1282) {
        selectedBackground = backgrounds.night.stormy; // Thunderstorm night
      }
    }

    setBackground(selectedBackground);
  };

  const handleSearchCity = (formData: FormData) => {
    const city = formData.get("city") as string;
    setCity(city);

    // get city weather
    getCityWeather(city);
  };

  const getWeatherByCoordinates = async (
    latitude: number,
    longitude: number,
  ) => {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    setLoading(true);
    setError(null); // Reset the error state

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`,
      );
      const data = await response.json();

      if (data.error) {
        // If the API response contains an error, set the error state with the API's error message
        setError(data.error.message);
        setLoading(false);
        return;
      }

      // If no error, update the weather state
      setWeather(data);
      setIcon(`https:${data.current.condition.icon}`);
      updateBackground(data);
      setLoading(false);
    } catch (err) {
      // If there's an error in the fetch request itself, handle it
      console.error("Error fetching weather data:", err);
      setError("An unexpected error occurred while fetching weather data.");
      setLoading(false);
    }
  };

  const getCityWeather = async (city: string) => {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    setLoading(true);
    setError(null); // Reset the error state

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`,
      );
      const data = await response.json();

      if (data.error) {
        // If the API response contains an error, set the error state with the API's error message
        setError(data.error.message);
        console.log("Error fetching weather data:", data.error.message);
        setLoading(false);
        return;
      }

      // If no error, update the weather state
      setWeather(data);
      setIcon(`https:${data.current.condition.icon}`);
      updateBackground(data);
      setLoading(false);
    } catch (err) {
      // If there's an error in the fetch request itself, handle it
      console.error("Error fetching weather data:", err);
      setError("An unexpected error occurred while fetching weather data.");
      setLoading(false);
    }
  };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formatTime = async (time: string) => {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    const dayOfWeek = days[day];
    const monthOfYear = months[month];

    return `${hours}:${minutes} ${dayOfWeek}, ${date.getDate()} ${monthOfYear} ${year}`;
  };

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#111]">
        <div className="max-w-md rounded-lg bg-red-500 p-6 text-center shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-white">Oops!</h2>
          <p className="mb-4 text-white">{error}</p>
          <button
            className="rounded bg-white px-4 py-2 font-semibold text-red-500 hover:bg-gray-200"
            onClick={() => setError(null)} // Reset error on button click
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${background} relative min-h-screen overflow-x-hidden bg-[#111] bg-cover bg-center bg-no-repeat text-white transition delay-500`}
    >
      <div className="container">
        <Nav userId={userId} />
      </div>

      <div className="container flex flex-col justify-between py-12 sm:flex-row">
        <div className="flex flex-col">
          <div className="flex-1">
            <h1>Weather Updates</h1>
          </div>
          {loading ? (
            <p>
              <Loader className="animate-spin" />
            </p>
          ) : (
            <div className="mt-12 pb-12 sm:mt-0">
              <div className="flex items-center gap-4 sm:gap-8">
                <div className="text-6xl sm:text-8xl">
                  <h1>
                    {weather?.current.temp_c}
                    <span>°</span>
                  </h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-3xl sm:text-4xl">
                    {weather?.location.name}
                  </h1>
                  <div className="flex gap-2 text-xs sm:text-base">
                    {/* time and date */}
                    <p>{formatTime(weather?.location.localtime)}</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  {/* weather */}
                  {/* icons */}
                  <Image src={icon} alt="sunny" width={50} height={50} />
                  <p>{weather?.current.condition.text}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex w-full flex-col gap-10 rounded-md bg-[#6e6e6e40] px-2 py-12 backdrop-blur-[10px] sm:w-[30%] sm:px-10">
          <form action={handleSearchCity} className="flex items-center">
            <input
              type="text"
              name="city"
              placeholder="Search for a location"
              className="rounded-l-lg border border-primary bg-transparent p-[0.4rem] placeholder-white/60 outline-none"
            />
            <button type="submit" className="rounded-r-lg bg-[#D66C05] p-2">
              <Search />
            </button>
          </form>

          <div className="border-b pb-3">
            {/* cities */}
            <ul className="flex flex-col gap-2">
              {initialCities.map((city) => (
                <button
                  key={city}
                  className="flex items-center gap-2 rounded-md bg-[#D66C05] p-1"
                  onClick={() => getCityWeather(city)}
                >
                  <li>{city}</li>
                </button>
              ))}
            </ul>
          </div>

          <div className="border-b pb-4">
            {/* details */}
            <h1 className="mb-3">Weather Details</h1>
            <ul className="flex flex-col gap-4">
              <li className="flex justify-between">
                <p>Cloudy</p>
                {/* percentage */}
                <p>{weather?.current.cloud}%</p>
              </li>
              <li className="flex justify-between">
                <p>Humidity</p>
                <p>{weather?.current.humidity}%</p>
              </li>
              <li className="flex justify-between">
                <p>Wind</p>
                <p>{weather?.current.wind_kph}km/h</p>
              </li>
              <li className="flex justify-between">
                <p>Pressure</p>
                <p>{weather?.current.pressure_mb}mb</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
