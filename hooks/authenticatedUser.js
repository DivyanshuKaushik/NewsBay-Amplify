import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'

function useAuthenticatedUser() {
    const [user,setUser] = useState(null)
    useEffect(()=>{
        checkUser()
        async function checkUser(){
            try{
                const user = await Auth.currentAuthenticatedUser()
                // console.log(user)
                setUser(user)
            }catch(err){
                setUser(null)
            }
        }
    },[])
    return user
}

export default useAuthenticatedUser
