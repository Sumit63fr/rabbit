import React from 'react'
import Icons from '../common/Icon'
import Paragraph from '../common/Paragraph'
import Heading2 from '../common/Heading2'

const testimonialsData = [
    {
        id: 1,
        text: "They told me not to take the money. That's when I knew they were the real deal. I came in looking for a quick MCA. Desperate to cover payroll, decent credit, but margins were razor-thin. Rabbit actually looked through my statements — and told me not to take the deal. They didn't pitch a workaround. They didn't try to 'make it fit.' They just explained the risk, broke down the cash flow, and told me to wait. No one else would've done that. That advice alone probably saved my business.",
        name: "Mike T.",
        role: "Fabrication Shop Owner, TX",
        avatar: "/assets/Profile1.png"
    },
    {
        id: 2,
        text: "We came for a loan. They gave us a strategy. We were asking for funding. Rabbit told us we didn't need a loan — we needed to stop waiting 60 days to get paid. They helped us switch to invoice factoring. At first, we were hesitant. Now we get paid the same week the job ends, and payroll's no longer a stress point. They didn't just fund us — they fixed our cash flow.",
        name: "Reggie D.",
        role: "Commercial Painting, IL",
        avatar: "/assets/Profile2.png"
    },
    {
        id: 3,
        text: "Out of the blue, Emile asked if I owned any property — and it saved me. I run three salons. Business was booming, but I got tricked into a high-interest MCA by a broker who promised the world. Payments were crushing me. Out of nowhere, Emile asked if I owned any real estate — I said yes, and he begged me to refinance. Rabbit helped me use a DSCR loan to pay off the debt. I saved over $35,000 a month in cash flow. It wasn't just a loan. It was a way out. They asked the right questions — the kind that actually save people.",
        name: "Tameka R.",
        role: "Salon Owner, GA",
        avatar: "/assets/Profile3.png"
    },
    {
        id: 4,
        text: "They built a payment plan around my slow season. I run an event rental company — winter is brutal. Every lender I spoke to offered cookie-cutter terms that didn't match how my cash flows. Rabbit actually listened. They structured a step-up repayment plan that gave me a cushion during the slow months and scaled when things picked back up. I stayed current, grew the business, and didn't lose my mind in January. Nobody else is underwriting like this.",
        name: "Vanessa C.",
        role: "Event Rentals, NJ",
        avatar: "/assets/Profile4.png"
    }
]

const Results = () => {
    return (
        <div className='flex flex-col items-center justify-center px-[20px] py-[60px]
            md:px-[60px] md:py-[80px]
            xl:px-[150px] xl:py-[100px] '>
            <Heading2 text="Real People. Real Results." margin="mb-[60px]"/>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto w-full max-w-[1440px]
'>
                {testimonialsData.map(({ id, text, name, role, avatar }) => (
                    <div key={id} className='flex flex-col p-6 bg-white items-start justify-between  shadow-[0px_4px_54px_0px_rgba(0,0,0,0.05)] rounded-[24px]'>
                        <div className='flex gap-1 flex-row items-center mb-4'>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Icons key={i} icon="rating" />
                            ))}
                        </div>

                        <Paragraph text={text} />

                        <span className='h-[1px] w-full mt-[48px] mb-4 bg-[#2B2B2B] opacity-10' />

                        <div className='flex flex-row items-center gap-3'>
                            <img src={avatar} alt={name} className='w-10 h-10 rounded-full object-cover' />
                            <div className='flex flex-col'>
                                <h5 className='font-semibold text-[#2B2B2B] text-[16px] leading-[100%]'>{name}</h5>
                                <p className='text-[14px] text-[#2B2B2B] font-normal leading-[150%]'>{role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Results