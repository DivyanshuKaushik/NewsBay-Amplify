import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Protected = ({children}) => {
    const [user,setUser] = useState(null)
    const router = useRouter()
    useEffect(()=>{
        checkUser()
        async function checkUser(){
            try{
                // const user = await Auth.currentAuthenticatedUser()
                setUser(true)
            }catch(err){
                console.error(err)
                // if(!user)router.push('/auth/signin')
                setUser(true)
            }
        }
    },[])
    return (
        <>
            {children}
        </>
    )
}

export default Protected
