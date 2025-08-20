import React from 'react'

export default function MoneyShare() {
    return (
        <div>
            <h3 className='font-bold text-xl text-gray-800 mb-4'>
                จำนวนเงิน
            </h3>
            <input type="number" id='amount' min={0} placeholder='ป้อนจำนวนเงิน'
                className='w-full border border-gray-300 p-4 focus:outline-none
                 focus:ring-2 focus:ring-blue-500 rounded' />
            <h3 className='font-bold text-xl text-gray-800 mb-4 mt-4 '>
                จำนวนคน
            </h3>
            <input type="number" id='person' min={0} placeholder='ป้อนจำนวนคน'
                className='w-full border border-gray-300 p-4 focus:outline-none
                 focus:ring-2 focus:ring-blue-500 rounded' />

            <button className='w-full mt-8 bg-blue-800 text-white  p-4 rounded'>คำนวนนวน</button>
            <button className='w-full mt-8 bg-red-800 text-white  p-4 rounded'>ปุ่มล้างข้อมูล</button>

            <div className='mt-8 text-center'>
                <h3 className='font-bold text-xl text-gray-800'>หารกันคนละ
                    <span className='text-red-800 text-5xl'>
                        0.00
                    </span>
                    บาท
                </h3>
            </div>

        </div>
    )
}
