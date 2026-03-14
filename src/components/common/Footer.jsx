import React from 'react'
import Icons from './Icon'
import {  FEATURES } from '../utils/Data'


const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center py-[60px] bg-[#F5F5F5]'>
            <h1 className='font-bold mb-10 text-[#2B2B2B] text-[48px] leading-[120%] text-center lg:text-left'>
                Better Tech. Better Team. Better Lending
            </h1>
            <div className='flex flex-row items-center gap-33 justify-center'>
                {FEATURES.map((feature, index) => (
                    <div key={index} className='flex flex-col items-center justify-center'>
                        <div className='bg-[#7AC943] mb-3 p-3 rounded-[12px]'>
                            <Icons icon={feature.icon} />
                        </div>
                        <h4 className='font-semibold text-[#2B2B2B] text-center text-[20px] leading-[100%] font-[Rubik]'>
                            {feature.label.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    {i < feature.label.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Footer