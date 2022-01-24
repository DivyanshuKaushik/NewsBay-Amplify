import React from 'react'
import TextField from '@mui/material/TextField';
const InputOutline = ({placeholder,value,onChange}) => {
    return (
        <>
         <TextField id="outlined-basic" color='warning' label={placeholder} variant="outlined" onChange={onChange} defaultValue={value} />
        {/* <Input
            type="text"
            color="orange"
            size="regular"
            outline={true}
            placeholder={placeholder}
            value={value}
            
          /> */}
            
        </>
    )
}

export default InputOutline
