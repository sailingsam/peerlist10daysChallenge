import React from 'react'

function SwipeLeft() {
  return (
    <div className="flex items-center justify-center h-screen w-full m-auto">
      <div className='relative items-center text-center justify-center bg-gray-900 w-[430px] h-[932px] rounded-[50px] border-8 border-black shadow-2xl cursor-pointer shadow-black'>
            <div className='m-auto h-8 w-28 mt-3 bg-black rounded-full flex justify-end items-center'>
                <div className=' bg-white h-1 w-1 mr-4 rounded-full'></div>
            </div>
      </div>
    </div>
  )
}

export default SwipeLeft
