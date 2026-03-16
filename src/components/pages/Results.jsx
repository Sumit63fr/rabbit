import React from 'react'
import Icons from '../common/Icon'
import Paragraph from '../common/Paragraph'
import Heading2 from '../common/Heading2'
import { TESTIMONIALDATA } from '../utils/Data'

const Results = () => {
    return (
        <div className='flex flex-col items-center justify-center px-[20px] pb-[60px]
            md:px-[60px] md:pb-[80px]
            xl:px-[150px] xl:pb-[170px] '>
            <Heading2 text="Real People. Real Results." margin="mb-[60px]"/>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto w-full max-w-[1440px]'>
                {TESTIMONIALDATA
            .map(({ id, text, name, role, avatar }) => (
                    <div key={id} className='flex flex-col p-6 bg-white items-start justify-between  shadow-[0px_4px_54px_0px_rgba(0,0,0,0.05)] rounded-[24px]'>
                        <div className='flex gap-1 flex-row items-center mb-4'>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Icons key={i} icon="rating" />
                            ))}
                        </div>

                        <Paragraph text={text}
                        align="text-left"/>

                        <span className='h-[1px] w-full mt-[48px] mb-4 bg-[#2B2B2B] opacity-10' />

                        <div className='flex flex-row items-center gap-3'>
                            <img src={avatar} alt={name} className='w-10 h-10 rounded-full object-cover' />
                            <div className='flex flex-col'>
                                <h5 className='font-semibold text-[#2B2B2B] text-[16px] leading-[100%]'>{name}</h5>
                                <p className='text-[14px] text-[#2B2B2B] font-normal leading-[150%]'>{role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Results