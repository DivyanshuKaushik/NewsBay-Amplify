import React from 'react'

const Heading = ({title,color}) => {
    return (
        <>
            {color && 
                <div className={`w-full border-b-2`} style={{borderColor:color}}>
                    <h1 className={`bg-${color} inline px-3 py-1 text-gray-100 text-xs font-medium uppercase`} style={{backgroundColor:color}}>{title}</h1>
                </div>
            }
        </>
    )
}

export default Heading
