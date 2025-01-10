import React from 'react'

const header = () => {
    return (
        <div className='fixed z-10 flex justify-end items-center gap-2 right-[2.5rem] top-[4rem]'>
            <button className='bg-black px-8 py-2 text-center inline-block text-[16px] font-[wolf1] rounded-[25px] border-4 border-white hover:bg-[#737373]'>Hire Me</button>
            <img className='h-10 cursor-pointer' src="/apps.svg" alt="Loading..." />
        </div>
    )
}

export default header
