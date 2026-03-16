import React, { useState } from 'react'
import Icons from './Icon'
import Button from './Button'

const Navbar = () => {
    const [isActive, seIsActive] = useState(true)

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='relative w-full bg-transparent'>

            <div className='flex flex-row items-center justify-between mx-auto w-full max-w-[1440px] px-[20px] md:px-[60px] xl:px-[150px] py-[20px]'>

                <a href=""><Icons icon="logo" /></a>                    
                

                <div className='hidden lg:flex flex-row whitespace-nowrap items-center gap-6 justify-center'>
                    <a href=""  className='text-[#4E4E4E] hover:[-webkit-text-stroke:0.5px_#4E4E4E] font-normal text-base leading-[150%]'>Home</a>
                    <a href="" className='text-[#4E4E4E] hover:[-webkit-text-stroke:0.5px_#4E4E4E] font-normal text-base leading-[150%]'>Programs</a>
                    <a href="" className='text-[#4E4E4E] hover:[-webkit-text-stroke:0.5px_#4E4E4E] font-normal text-base leading-[150%]'>How It Works</a>
                    <a href="" className='text-[#4E4E4E] hover:[-webkit-text-stroke:0.5px_#4E4E4E] font-normal text-base leading-[150%]'>Testimonial</a>
                    <a href="" className='text-[#4E4E4E] hover:[-webkit-text-stroke:0.5px_#4E4E4E] font-normal text-base leading-[150%]'>About</a>
                </div>

                <div className='hidden lg:flex'>
                    <Button
                        text="Contact Us"
                        border="border-[2px] border-[#2B2B2B] rounded-full"
                        padding="px-[32px] py-[18px]"
                        font="text-[16px] font-semibold leading-[100%]"
                        hover="hover:bg-[#2B2B2B] hover:text-white transition-all ease-in-out duration-300"

                    />
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='lg:hidden flex flex-col gap-[5px] items-center justify-center w-8 h-8 cursor-pointer z-[500]'
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-[2px] bg-[#2B2B2B] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`w-6 h-[2px] bg-[#2B2B2B] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-6 h-[2px] bg-[#2B2B2B] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </button>

            </div>

            <div className={`
                fixed lg:hidden top-0 right-0 h-screen w-[280px] md:w-[340px]
                bg-white shadow-[-10px_0px_40px_0px_rgba(0,0,0,0.08)]
                flex flex-col items-start gap-8 pt-[100px] px-[40px] pb-[60px]
                z-50 transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>

                
                <nav className='flex flex-col gap-8 w-full'>
                    {['Home', 'Programs', 'How It Works', 'Testimonial', 'About'].map((link) => (
                        <a
                            key={link}
                            href=""
                            className='text-[#4E4E4E] font-normal text-base leading-[150%] hover:[-webkit-text-stroke:0.5px_#4E4E4E] transition-colors duration-200'
                            onClick={() => setIsOpen(false)}
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                <span className='h-[1px] w-full bg-[#2B2B2B] opacity-10' />

                <Button
                    text="Contact Us"
                    border="border-[2px] border-[#2B2B2B] rounded-full"
                    padding="px-[32px] py-[18px]"
                    font="text-[16px] font-semibold leading-[100%]"
                    hover="bg-[#2B2B2B] text-white transition-all ease-in-out duration-300"
                />

            </div>

            {isOpen && (
                <div
                    className='fixed lg:hidden top-0 left-0 right-0 bottom-0 bg-black/30 z-40'
                    onClick={() => setIsOpen(false)}
                />
            )}

        </div>
    )
}

export default Navbar