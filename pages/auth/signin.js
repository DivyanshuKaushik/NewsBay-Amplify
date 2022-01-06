import SignIn from "../../components/Auth/SignIn";
import { Auth } from "aws-amplify";
import { useState } from "react";
import ForgotPassword from "../../components/Auth/ForgetPassword";

const SignInPage = () => {
  const [uiState,setUiState] = useState("signIn")

  const [credentials,setCredentials] = useState({email:"",password:"",authCode:null})
  const {email,password,authCode} = credentials

  const onChange = (e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }

  const signIn = async(e)=>{
    e.preventDefault()
    try{

    }catch(err){

    }
  }
  const forgetPassword = async(e)=>{
    e.preventDefault()
    try{

    }catch(err){

    }
  }
  const forgetPasswordSubmit = async(e)=>{
    e.preventDefault()
    try{

    }catch(err){

    }
  }
  console.log(uiState)
  return (
    <main className="min-h-full w-full flex justify-center items-center">
      {uiState==="signIn" ?
        <SignIn onChange={onChange} signIn={signIn} setUiState={setUiState} />
        :<ForgotPassword onChange={onChange} setCredentials={setCredentials} signIn={signIn} uiState={uiState} setUiState={setUiState}/>
      }
      {/* {uiState===( "enterEmail" )&&  */}
      {/* } */}
    </main>
  );
};

export default SignInPage;
