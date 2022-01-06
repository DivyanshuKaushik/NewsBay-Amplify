import React from 'react'

const Heading = ({title,color}) => {
    return (
        <div className={`w-full border-b-2 border-${color}`}>
            <h1 className={`bg-${color} inline px-3 py-1 text-gray-100 uppercase`}>{title}</h1>
        </div>
    )
}

export default Heading
