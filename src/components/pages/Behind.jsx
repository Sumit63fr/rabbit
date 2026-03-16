import React from 'react'
import Heading2 from '../common/Heading2'
import Paragraph from '../common/Paragraph'

const Behind = () => {
  return (
      <div className='
                flex items-center justify-between mx-auto max-lg:gap-25 w-full max-w-[1440px]
                flex-col px-[20px] py-[60px] 
                md:px-[60px] md:py-[80px] 
                lg:flex-row xl:px-[150px] xl:py-[100px] 
            '>          <div>
              
          <img src="/assets/Behind.png" alt="" />
          </div>
          <div className='flex flex-col w-[502px] items-start justify-center'>
              <Heading2 margin="mr-4" text="Who’s Behind Rabbit?"/>
              <Paragraph  margin="mt-3" text="Our team isn’t just from finance. We’re ex-operators, former founders, and recovering bankers who got tired of saying &quot; no &quot; when we knew there was a better way to fund."/>
          </div>
          
    </div>
  )
}

export default Behind