import React from 'react'

const ExportFilterLayoutCard = ({ children, className='' }) => {
  return (
    <div className={`bg-white rounded-md px-4 h-24 flex items-center ${className}`}>
        { children }
    </div>
  )
}

export default ExportFilterLayoutCard