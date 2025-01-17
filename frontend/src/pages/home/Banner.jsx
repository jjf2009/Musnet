import React from 'react'

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="" />
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>Discover the Best New Music</h1>
            <p className='mb-10'>Explore this week's top hits and hidden gems across all genres. Whether you're looking for fresh beats or soulful melodies, there's something here to inspire and delight your ears.</p>

            <button className='btn-primary'>Explore Now</button>
        </div>

       
    </div>
  )
}

export default Banner