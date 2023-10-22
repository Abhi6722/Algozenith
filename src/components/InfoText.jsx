import React from 'react'

const InfoText = ({ text1, text2 }) => {
    return (
        <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-md flex items-center justify-center">
                <i className="icon-2"></i>
            </div>
            <div>
                <p className='text-md font-bold'>{text1}</p>
                <p className=' text-xs'>{text2}</p>
            </div>
        </div>
    )
}

export default InfoText