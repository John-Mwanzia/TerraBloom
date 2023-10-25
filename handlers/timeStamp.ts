export default function getTimeSincePostCreation(createdAt: string): string {
  // Parse the 'createdAt' string into a Date object, representing the exact date and time when the post was created.
  const postDate = new Date(createdAt);

  // Create a Date object representing the current date and time when this code is executed.
  const currentDate = new Date();

  // Calculate the time difference between the current date and the post's creation date in milliseconds.
  const timeDifference = currentDate.getTime() - postDate.getTime();

  // Convert the time difference into seconds.
  const seconds = Math.floor(timeDifference / 1000);

  // Calculate the number of minutes.
  const minutes = Math.floor(seconds / 60);

  // Calculate the number of hours.
  const hours = Math.floor(minutes / 60);

  // Calculate the number of days.
  const days = Math.floor(hours / 24);

  // Calculate the number of months based on an average of 30.44 days per month.
  const months = Math.floor(days / 30.44);

  // Calculate the number of years based on 12 months in a year.
  const years = Math.floor(months / 12);

  // Check how much time has passed and return an appropriate string representation.
  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
  if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }
  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }
  if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }
  if (seconds > 0) {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }

  // If none of the above conditions are met, return "Just now" (post created very recently).
  return "Just now";
}
