import React from 'react'

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[60000] flex justify-center items-center bg-white ">
        <div className="w-12 h-12 aspect-square rounded-full border-8 border-lilac border-t-transparent animate-spin"></div>
    </div>
  )
}

export default Loader