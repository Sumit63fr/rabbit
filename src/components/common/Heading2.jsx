import React from 'react'

const Heading2 = ({text ,margin}) => {
  return (
      <h2 className={` ${margin} font-bold  text-[#2B2B2B] text-[48px] leading-[120%] text-center lg:text-left`}>
          {text}
      </h2>
  )
}

export default Heading2