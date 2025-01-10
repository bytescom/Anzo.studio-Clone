import React, { useRef } from 'react'

const Tilttext = (props) => {
    return (
        <div ref={props.tiltRef} className='perspective flex flex-col justify-start items-start cursor-pointer'>
            <p className='text-[4.0rem] font-[wolf2] font-extrabold tracking-tighter leading-[80px] pl-[4px] '>I AM <span className='text-black'>DARK MODE</span>™</p>
            <p className='text-[7.5rem] font-[wolf2] font-extrabold tracking-tighter leading-[80px]'>DESIGNER</p>
            <p className='text-[4.0rem] font-[wolf2] font-extrabold tracking-tighter leading-[92px] pl-[6px] '>TO HIRE</p>
        </div>
    )
}

export default Tilttext
