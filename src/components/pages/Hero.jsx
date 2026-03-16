import React from 'react'
import Button from '../common/Button'
import Icons from '../common/Icon'
import Image from './Image'
import Paragraph from '../common/Paragraph'

const Hero = () => {
    return (
        <div className='relative w-full bg-transparent'>

            <div className='
                flex items-center justify-between mx-auto max-lg:gap-25 w-full max-w-[1440px]
                flex-col px-[20px] py-[60px] 
                md:px-[60px] md:py-[80px] 
                lg:flex-row xl:px-[150px] xl:py-[100px] 
            '>

                <div className='flex flex-col items-center lg:items-start justify-center'>
                    <h1 className='font-bold text-[#2B2B2B] text-[36px] sm:text-[44px] md:text-[52px] leading-[120%] text-center lg:text-left'>
                        Built by People. <br /> Backed by Tech.
                    </h1>
                    <Paragraph
                        margin="my-4"
                        width="w-[490px]"
                        text="We’re not a software company pretending to care.We’re real underwriters — with real decision-making power — using tech to move faster, not think for us."/>
                    <Button
                        text="Join the Success"
                        border="border-[2px] border-[#7AC943] rounded-full"
                        padding="px-[32px] mt-4 py-[19px]"
                        svg={
                            <Icons
                                icon="arrow"
                                className="text-white group-hover:text-[#7AC943] transition-colors duration-300"
                            />
                        }
                        font="text-white font-semibold leading-[100%]"
                        bgColor="bg-[#7AC943]"
                        hover="hover:bg-transparent hover:text-[#7AC943] transition-all ease-in-out duration-300"

                    />
                </div>

                <div className='flex items-center justify-center w-full lg:w-auto'>
                    <Image/>
                </div>

            </div>
        </div>
    )
}

export default Hero