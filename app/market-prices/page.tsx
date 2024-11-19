import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className = "flex flex-col gap-y-6 justify-center h-screen w-screen items-center bg-black text-white">
      <h1 className='text-5xl '>
        market prices
      </h1>
      <div>
        <h1 className='text-5xl flex gap-1 '>
          <span className='text-primary '>
            Comming 
          </span>
          <span className='text-blue-500'>soon</span>
          </h1>
      </div>
      <div>
         <h3>But in the mean time you can access market prices from the ministry of agriculture and livestock website</h3>
         <Link href='https://kamis.kilimo.go.ke/index.php/site/market' className='text-blue-500'> Market Prices</Link>
      </div>
    </div>
  )
}
