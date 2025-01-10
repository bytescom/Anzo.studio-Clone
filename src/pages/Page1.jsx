import React, { useRef, useState } from 'react'
import anzoImg from '../assets/anzo img.webp';
import oimg from '../assets/circle.webp'
import Tilttext from '../components/Tilttext';
import Bottompage1 from '../components/Bottompage1';

const Page1 = () => {

    return (
        <div className='h-[765px] p-[0.85rem] bg-white'>
            <div className='h-full w-full perspective px-16 py-12 shadow-sm shadow-slate-900 rounded-[2rem] bg-cover bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2790,h_1474,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)]'>

                <img className='pb-[7rem] w-[4.5rem]' src={oimg} alt="loading logo..." />

                <Tilttext tiltRef={tiltRef} />
                
                <Bottompage1 />

            </div>
        </div>
    )
}

export default Page1
