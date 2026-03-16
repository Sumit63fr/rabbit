import React from 'react'
import Paragraph from '../common/Paragraph'
import { FUNDINGDATA } from '../utils/Data'
import Icons from '../common/Icon'

const Stories = () => {
    return (
        <div className='flex flex-col items-center justify-center 
            px-5 py-[60px]
            md:px-[60px] md:py-[80px]
            xl:px-[150px] xl:py-[170px]'>

            <h1 className='font-bold text-[#2B2B2B] mb-3 
                text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] 
                leading-[120%] text-center'>
                Real Stories. Real Funding.
            </h1>

            <Paragraph
                align="text-center"
                width="w-full max-w-[590px]"
                text="We've helped small businesses from all industries get approved and grow fast. Here's what they had to say:"
            />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[60px] mx-auto w-full max-w-[1440px]'>
                {FUNDINGDATA.map(({ id, text, name, role, avatar }) => (
                    <div
                        key={id}
                        className='flex flex-col p-6 bg-white items-start justify-center 
                            shadow-[0px_4px_54px_0px_rgba(0,0,0,0.05)] rounded-[24px]'
                    >
                        <div className='flex gap-1 flex-row items-center mb-4'>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Icons key={i} icon="rating" />
                            ))}
                        </div>

                        <Paragraph text={text} align="text-left" />

                        <span className='h-[1px] w-full mt-4 mb-4 bg-[#2B2B2B] opacity-10' />

                        <div className='flex flex-row items-center gap-3'>
                            <img
                                src={avatar}
                                alt={name}
                                className='w-10 h-10 rounded-full object-cover'
                            />
                            <div className='flex flex-col'>
                                <h5 className='font-semibold text-[#2B2B2B] text-[16px] leading-[100%]'>
                                    {name}
                                </h5>
                                <p className='text-[14px] text-[#2B2B2B] font-normal leading-[150%]'>
                                    {role}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stories