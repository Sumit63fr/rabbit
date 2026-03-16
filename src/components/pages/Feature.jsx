import React from 'react'
import Icons from '../common/Icon'
import { FEATURES } from '../utils/Data'
import Heading2 from '../common/Heading2'


const Feature = () => {
    return (
        <div className='flex flex-col items-center justify-center pb-[84px] pt-[60px] bg-[#F5F5F5]'>
            <Heading2 margin="mb-[64px]" text="Better Tech. Better Team. Better Lending" />
            <div className='flex flex-row items-center gap-33 justify-center'>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-17">
                    {FEATURES.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <div className="bg-[#7AC943] mb-3 p-3 rounded-[12px]">
                                <Icons icon={feature.icon} />
                            </div>
                            <h4 className="font-semibold text-[#2B2B2B] text-center  text-[16px] sm:text-[20px] leading-[100%] font-[Rubik]">
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
        </div>
    )
}

export default Feature