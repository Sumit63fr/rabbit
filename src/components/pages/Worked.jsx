import React from 'react'
import Icons from '../common/Icon'
import Heading2 from '../common/Heading2'
import Paragraph from '../common/Paragraph'

const Worked = () => {
  return (
    <div className="w-full mx-auto bg-[linear-gradient(to_bottom,#e8f5e0_0%,#f0f9ea_40%,white_100%)] px-4 md:py-25.75 py-15">
      <div className="max-w-[734.29px] w-full mx-auto relative flex items-center justify-center">
        <Icons icon={"rabbit"} />

        <div className="absolute flex flex-col   w-full items-center text-center px-4">
          <div className="flex flex-col max-w-147.5">
            <Heading2
              text="Worked With Rabbit?" />
            <div className='flex text-center'>

            <Paragraph
              text="We love hearing success stories. Submit your testimonial and helpothers fund their story."
            />
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Worked