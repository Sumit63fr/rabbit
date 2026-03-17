import React from 'react'
import Icons from '../common/Icon'
import Heading2 from '../common/Heading2'
import Paragraph from '../common/Paragraph'
import Button from '../common/Button';

const Worked = () => {
  return (
    <div className="w-full mx-auto bg-[linear-gradient(to_bottom,#e8f5e0_0%,#f0f9ea_40%,white_100%)] px-4 md:py-25.75 py-15">
      <div className="max-w-[734.29px] w-full mx-auto relative flex items-center justify-center">
        <div className="hidden sm:block w-full">
          <Icons icon={"rabbit"} />
        </div>

        <div className="sm:absolute flex flex-col w-full items-center text-center px-4">
          <div className="flex flex-col w-full max-w-[480px] sm:max-w-147.5 items-center">
            <h1 className='font-bold text-[#2B2B2B] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] mb-3 leading-[120%] text-center'>
              Worked With Rabbit?
            </h1>
            <Paragraph
              width="w-full max-w-[480px]"
              text="We love hearing success stories. Submit your testimonial and help others fund their story."
            />
            <Button
              text="Share Yours"
              border="border-[2px] border-[#7AC943] rounded-full"
              padding="px-[24px] sm:px-[32px] mt-6 py-[14px] sm:py-[19px]"
              svg={
                <Icons
                  icon="arrow"
                  className="text-white group-hover:text-[#7AC943] transition-colors duration-300"
                />
              }
              font="text-white font-semibold leading-[100%] text-sm sm:text-base"
              bgColor="bg-[#7AC943]"
              hover="hover:bg-transparent hover:text-[#7AC943] transition-all ease-in-out duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Worked