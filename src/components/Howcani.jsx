import React from 'react'

const Howcani = () => {
    return (
        <div className='flex flex-col gap-[4rem]'>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <p className='font-[wolf6] text-[16rem] tracking-wide leading-[0.9]' >HOW</p>
                    <p className='font-[wolf6] text-[16rem] tracking-wide leading-[0.9]' >CAN</p>
                </div>
                <div className='flex flex-col items-end'>
                    <p className='font-[wolf6] text-[16rem] tracking-wide leading-[0.9]' >I HELP</p>
                    <p className='font-[wolf6] text-[16rem] tracking-wide leading-[0.9]' >YOU</p>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-12'>
                <div className='font-[wolf1] text-[1.20rem]'>
                    <span className='text-[#898989]'>I am a self-taught web and brand designer with a passion for creating unique and timeless </span>masterpieces for ambitious professionals, entrepreneurs, artists, and boutique businesses.
                </div>
                <div className='font-[wolf1] text-[1.20rem]'>
                    <span className='text-[#898989]'>With a background in strategic marketing and acknowledged expertise in web development</span>, I aim to minimize my client's resources spent on macro and micro-management, marketing research, and hiring a whole team of a larger agency.
                </div>
                <div className='font-[wolf1] text-[1.20rem]'>
                    My mission is to drive exceptional growth for my clients by increasing their brand appearance, <span className='text-[#898989]'>defining their identity, and engaging customers through captivating black-and-white aesthetics with a modern, luxurious, and minimalistic touch.</span>
                </div>
            </div>

            <div className='flex justify-start'>
                <div className='flex justify-center items-baseline gap-2'>
                    <img className='h-10' src="/SUN.png" alt="loading..." />
                    <p className='text-[3.5rem] font-[wolf6]'>DESIGN</p>
                    <p className='text-[2rem] font-[wolf6]'>01</p>
                </div>
                <div className='flex justify-center items-baseline gap-2'>
                    <img className='h-10' src="/EARTH.png" alt="loading..." />
                    <p className='text-[3.5rem] font-[wolf6]'>DEVELOPMENT</p>
                    <p className='text-[2rem] font-[wolf6]'>02</p>
                </div>
                <div className='flex justify-center items-baseline gap-2'>
                    <img className='h-10' src="/START UP.png" alt="loading..." />
                    <p className='text-[3.5rem] font-[wolf6]'>BRANDING</p>
                    <p className='text-[2rem] font-[wolf6]'>03</p>
                </div>
            </div>

            <div>
                <p className='open-sans text-[1.15rem] font-light text-[#898989] leading-[18px]'>SOUNDS GOOD?</p>
                <p className='open-sans text-[1.15rem] font-light text-[#898989] leading-[18px]'>THEN PLEASE
                    <span className='font-[wolf1] text-[1.15rem]' >
                        <a href="#"> EMAIL ME</a>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Howcani
