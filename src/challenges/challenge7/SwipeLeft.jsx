import React from 'react'

function SwipeLeft() {
  return (
    <div className="flex items-center justify-center w-full m-auto">
      <div className='relative items-center text-center justify-center bg-gray-900 w-[400px] h-[90vh] min-h-[850px] my-1 m-auto rounded-[50px] border-8 border-black shadow-2xl cursor-pointer shadow-black'>
            {/* ye mobile notch hai */}
            <div className='m-auto h-8 w-28 mt-3 bg-black rounded-full flex justify-end items-center'>
                <div className=' bg-white h-1 w-1 mr-4 rounded-full'></div>
            </div>
            {/* ab ye main screen ke niche ka pura hissa */}
      </div>
    </div>
  )
}

export default SwipeLeft
