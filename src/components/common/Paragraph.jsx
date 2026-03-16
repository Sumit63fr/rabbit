import React from 'react'

const Paragraph = ({ text, width, margin, align }) => {
    return (
        <p className={` ${width} ${margin} ${align}  font-normal  text-[#4E4E4E] text-[14px] md:text-[16px] leading-[150%] text-center  `}>
           {text}
        </p>
  )
}

export default Paragraph