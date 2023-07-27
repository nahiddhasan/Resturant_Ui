"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = ({setOpen}) => {
  return (
    <Link onClick={()=>(setOpen(false))} href="/cart" className=' flex items-center gap-4 md:gap-2'>
    <div className='relative w-8 h-8 md:w-5 md:h-5'>
        <Image src="/cart.png" fill alt=''/>
    </div>
    <span>Cart 3</span>
    </Link>
  )
}

export default CartIcon