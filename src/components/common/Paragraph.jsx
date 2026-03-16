import React from 'react'

const Paragraph = ({text, width , margin}) => {
    return (
        <p className={` ${width} ${margin}   font-normal  text-[#4E4E4E] text-[14px] md:text-[16px] leading-[150%] text-center lg:text-left `}>
           {text}
        </p>
  )
}

export default Paragraph