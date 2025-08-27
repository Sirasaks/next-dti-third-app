"use client"

import React, { useState } from 'react'

export default function MoneyShare() {
    const [money, setMoney] = useState('')
    const [person, setPerson] = useState('')
    const [moneyshare, setMoneyShare] = useState('0.00')

    const handleInputPerson = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPerson(e.target.value);
    }

    const handleClickReset = () => {
        setMoney('')
        setPerson('')
        setMoneyShare('0.00')
    }

    const handleClickCalculate = () => {
        if (Number(person) > 0) {
            const result = (Number(money) / Number(person)).toFixed(2)
            setMoneyShare(result)
        } else {
            setMoneyShare('0.00')
        }
    }

    return (
        <div>
            <h3 className='font-bold text-xl text-gray-800 mb-4'>
                จำนวนเงิน
            </h3>
            <input
                type="number"
                id='amount'
                min={0}
                placeholder='ป้อนจำนวนเงิน'
                className='w-full border border-gray-300 p-4 focus:outline-none
                 focus:ring-2 focus:ring-blue-500 rounded'
                value={money}
                onChange={(e) => setMoney(e.target.value)}
            />

            <h3 className='font-bold text-xl text-gray-800 mb-4 mt-4 '>
                จำนวนคน
            </h3>
            <input
                type="number"
                id='person'
                
                min={0}
                placeholder='ป้อนจำนวนคน'
                className='w-full border border-gray-300 p-4 focus:outline-none
                 focus:ring-2 focus:ring-blue-500 rounded ' 
                value={person}
                onChange={handleInputPerson}
            />

            <button
                className='w-full mt-8 bg-blue-800 text-white p-4 rounded'
                onClick={handleClickCalculate}
            >
                คำนวณ
            </button>
            <button
                className='w-full mt-4 bg-red-800 text-white p-4 rounded'
                onClick={handleClickReset}
            >
                ล้างข้อมูล
            </button>

            <div className='mt-8 text-center'>
                <h3 className='font-bold text-xl text-gray-800'>
                    หารกันคนละ
                    <span className='text-red-800 text-5xl'>
                        {moneyshare}
                    </span>
                    บาท
                </h3>
            </div>
        </div>
    )
}
