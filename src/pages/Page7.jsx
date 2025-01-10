import React from 'react'
import Footer from '../components/footer'
import RotateTxt from '../components/rotatetxt'

const Page7 = () => {
  return (
    <div className='h-screen p-[0.85rem] bg-white'>
      <div className='h-full w-full px-16 pt-12 pb-10 shadow-sm shadow-slate-900 rounded-[2rem] bg-cover bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_2790,h_1058,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg)]'>

        <div>
          <p className='font-[wolf6] text-[16rem] tracking-wide leading-[0.9]' >GOT AN</p>

        </div>
        <div className='flex items-end gap-[20rem]'>
          <p className='font-[wolf6] text-[16rem] tracking-wide leading-[0.9]' >IDEA</p>
          <RotateTxt />
        </div>


        <Footer />
      </div>
    </div>
  )
}

export default Page7

