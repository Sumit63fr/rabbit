import React from 'react'
import Button from '../common/Button'
import Icons from '../common/Icon'

const Submit = () => {
  return (
    <div className='px-4 bg-[linear-gradient(to_bottom,#fefefe_0%,#fefefe_71%,#f5f5f5_72%,#f5f5f5_100%)]'>
      <div className="w-full flex flex-col items-center max-w-285 mx-auto rounded-3xl 
          pt-10 pb-10 sm:pt-15 sm:pb-15.5
          bg-[url('/assets/Bg-img2.webp')] bg-cover bg-center">

        <h1 className='text-white font-bold leading-[120%] 
            text-[24px] sm:text-[28px] md:text-[32px]
            w-full max-w-[90%] sm:max-w-[80%] md:max-w-[766.1px] 
            px-2 text-center'>
          <span>Love what Rabbit Did for You! </span>
          Share your story and help others Submit human-first funding.
        </h1>

        <Button
          text="Submit Your Testimonial"
          bgColor="bg-[#0101013D]"
          padding="px-[24px] sm:px-[32px] py-4 sm:py-5 mt-8 sm:mt-[52px]"
          rounded="rounded-full"
          font="text-[14px] sm:text-[16px] text-white font-semibold"
          hover="hover:bg-white transition-all ease-in-out duration-300 hover:text-black"
          svg={
            <Icons
              icon="arrow"
              className="text-white group-hover:text-[#7AC943] transition-colors duration-300"
            />
          }
        />
      </div>
    </div>
  )
}

export default Submit