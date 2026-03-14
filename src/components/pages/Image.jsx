import React from 'react'
import Icons from '../common/Icon'

const Image = () => {
  return (
      <div className='relative w-[377px] '>
        
          <img src="/assets/Characters.png" alt="" />
          <img src="/assets/Chart.png" alt="" className='absolute top-0 left-92' />
          <img src="/assets/Group.png" alt="" className='absolute -top-12 left-[34%]' />
          <div className='absolute top-[75%] -left-[88px]'>
              
          <Icons icon="greenStar"  />
          </div>
          
          <div className='absolute top-0 -left-[88px]'>
          <Icons icon="puzzle2" />

          </div>
          <div className='absolute top-[140px] left-1/2 border border-black/20 rounded-full p-4 px-3'>
              <Icons icon="tick" />

      </div>
      <div className='absolute top-[40%] scale-50 left-[388px]'>

        <Icons icon="greenStar" />
      </div>


    </div>
  )
}

export default Image