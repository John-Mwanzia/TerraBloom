import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className = "flex flex-col  justify-center h-screen w-screen items-center bg-black text-white">
      <div className='flex flex-col text-center rounded-3xl shadow-md shadow-blue-500 gap-y-6 max-w-xl py-4 rouned-3xl'>
        <h1 className='text-5xl '>
          market prices
        </h1>
        <div className='flex justify-center items-center'>
          <h1 className='text-5xl text-center flex gap-1 '>
            <span className='text-primary font-bold '>
              Coming 
            </span>
            <span className='text-blue-500 font-bold'>soon</span>
          </h1>
        </div>
        <div>
          <h3>But in the mean time you can access market prices from the ministry of agriculture and livestock website</h3>
          <Link href='https://kamis.kilimo.go.ke/index.php/site/market' className='text-blue-500' target='_blank'> Market Prices</Link>
        </div>
      </div>
    </div>
  )
}
