import React from 'react'
import Image from 'next/image'
import money from './images/money.png'
import MoneyShare from '@/components/MoneyShare'

export default function Homepage() {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center'>
      <div className='shadow-2xl rounded-2xl p-8 w-full max-w-xl'>
        <h1 className='text-3xl font-bold text-center text-blue-800 mt-4'>Money Share Calculator</h1>
        <h3 className='text-xl font-bold text-center text-blue-800 mt-4'>คำนวนเงินที่ต้องหารกัน</h3>
        <Image
          className='mx-auto mt-4 mb-8'
          src={money}
          alt="money"
          width={100}
          height={100}
        />
        <MoneyShare />

      </div>
      <h3 className='mt-8 font-bold text-xl'>
        Developed by {''}
        <span className='text-blue-500'>
          Siasak DTI SAU TEAM
        </span>
      </h3>
    </div>
  )
}