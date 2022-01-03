import React from 'react'
import Input  from "@material-tailwind/react/Input";
const InputOutline = ({placeholder,value,onChange}) => {
    return (
        <>
        <Input
            type="text"
            color="orange"
            size="regular"
            outline={true}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
            
        </>
    )
}

export default InputOutline
