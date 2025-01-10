import React from 'react'
import Rightfit from '../components/Rightfit'
import Howcani from '../components/Howcani'

const Page5 = () => {
  return (
    <div>

      <div className='h-screen p-[0.85rem] bg-white'>
        <div className='h-full w-full px-16 py-12 shadow-sm shadow-slate-900 rounded-[2rem] bg-cover bg-black'>
          <div className='text-white pt-[10rem] text-[32rem] tracking-[1.5rem] leading-[30rem] font-[wolf6] font-bold'>ABOUT</div>
        </div>
      </div>


      <div className='h-full p-[0.85rem] bg-white'>
        <div className='h-full w-full px-16 py-12 shadow-sm shadow-slate-900 rounded-[2rem] bg-cover bg-black'>
          {/* <img src="https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_777,h_668,al_c,q_90,enc_avif,quality_auto/triangle%203.png" alt="Loading..." /> */}
          <Howcani />
        </div>
      </div>



      <div className='h-screen p-[0.85rem] bg-white'>
        <div className='h-full w-full px-16 py-12 shadow-sm shadow-slate-900 rounded-[2rem] bg-cover bg-black'>

          <Rightfit />
        </div>
      </div>

    </div>
  )
}

export default Page5
