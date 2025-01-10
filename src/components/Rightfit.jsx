import React from 'react'

const Rightfit = () => {
    return (
        <div className='flex justify-centre items-start gap-[10rem]'>
            <div className='flex flex-col gap-[9rem]'>
                <div className='flex flex-col'>
                    <p className='font-[wolf6] text-[16rem] tracking-wide leading-[0.9]' >RIGHT</p>
                    <p className='font-[wolf6] text-[16rem] tracking-wide leading-[0.9]' >FIT</p>
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

            <div className='flex flex-col gap-8 pt-8'>
                <div>
                    <p className='open-sans text-[1.15rem] font-normal text-[#898989]'>PERSONALITY</p>
                    <p className='font-[wolf1] text-[1.25rem]'>Business relationships build on trust and compassion vs how can I get more for less +/-</p>
                </div>
                <div>
                    <p className='open-sans text-[1.15rem] font-normal text-[#898989]'>APPROACH</p>
                    <p className='font-[wolf1] text-[1.25rem]'>Full dive into personality, goals and objectives with transparency of worq process vs template and unmanageable office routine +/-</p>
                </div>
                <div>
                    <p className='open-sans text-[1.15rem] font-normal text-[#898989]'>DESIGN</p>
                    <p className='font-[wolf1] text-[1.25rem]'>Design that is actually functional and helps to achieve results is design that works +/-</p>
                </div>
                <div>
                    <p className='open-sans text-[1.15rem] font-normal text-[#898989]'>FOCUS</p>
                    <p className='font-[wolf1] text-[1.25rem]'>How can I help and what can I do solve your problem or objective vs how can I sell you more +/-</p>
                </div>
                <div>
                    <p className='open-sans text-[1.15rem] font-normal text-[#898989]'>CORE VALUE</p>
                    <p className='font-[wolf1] text-[1.25rem]'>Time, trust and experience are resources we can not buy, yet we are sharing them and exchange +/-</p>
                </div>
            </div>
        </div>
    )
}

export default Rightfit
