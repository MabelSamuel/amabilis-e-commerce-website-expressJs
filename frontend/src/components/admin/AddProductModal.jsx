import React from 'react'

const AddProductModal = ({ closeDashboardModal }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-45 z-[100] flex justify-center items-center h-screen' onClick={closeDashboardModal}>
        <div className='w-[70%] bg-white rounded-lg sm:w-full sm:max-h-full overflow-y-auto' onClick={(e) => e.stopPropagation()}>
            yess
        </div>
    </div>
  )
}

export default AddProductModal