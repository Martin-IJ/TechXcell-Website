import React from 'react'
import { PiAtomThin } from 'react-icons/pi'

const WhyPage = () => {
  return (
    <div>
        <div className='max-w-[85%] w-full m-auto text-center py-20'>
            <h1 className='text-5xl'>Why <span className='text-default'>Choose</span> Us</h1>
            <p className='max-w-[560px] w-full m-auto'>Biggest brands in the automotive industry recommend our company as a reliable corporate website developer</p>
            <div>
                <div className='border rounded-md p-10'>
                    <div className='border-2 border-[#F35444] inline-flex p-3 rounded-full text-5xl'>
                        <PiAtomThin />
                    </div>
                    <p>Big experience</p>
                    <p>Many years of work in this field is an excellent indicator that companies trust us and in response we offer unique solutions.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyPage