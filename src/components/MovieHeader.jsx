import React from 'react'

const MovieHeader = ({title, overview}) => {
   
  return (
    <div className='pt-[20%] w-screen aspect-video absolute bg-gradient-to-r from-black text-white pb-10 px-16'>
      <h1 className='font-bold text-[32px] w-1/4'>{title}</h1>
      <p className='w-1/4 my-3'>{overview}</p>
      <div className='mt-8'>
        <button className='bg-white text-[18px] hover:bg-opacity-80 text-black font-bold rounded-lg p-2 w-[120px]'>Play</button>
        <button className='bg-gray-700 bg-opacity-90 text-[18px] hover:bg-opacity-70 text-white rounded-lg p-2 w-[140px] ml-3 font-bold'>More Info</button>
      </div>
    </div>
  )
}

export default MovieHeader
