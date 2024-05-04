'use client'
import * as React from 'react';
import Rating from '@mui/material/Rating';
interface IRating {
    value: number
    quantity: number
}

export default function RatingStar({ value, quantity }: IRating) {
    return <div className='flex gap-1 items-center'>
        <Rating name="read-only" value={value} readOnly />
        <div className='text-[#101D62] text-[14px] font-bold'>
            <p>{quantity}</p>
        </div>
    </div>
}
