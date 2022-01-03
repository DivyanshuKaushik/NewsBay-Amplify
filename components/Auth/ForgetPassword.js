import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import {FcGoogle} from 'react-icons/fc'
import { FaFacebook } from "react-icons/fa";
import { Auth } from "aws-amplify";

const ForgotPassword = ({onChange,setCredentials,signIn,uiState,setUiState}) => {
  return (
    <div className="flex flex-col space-y-4 border shadow-xl rounded-2xl p-3 px-5 w-4/5 md:w-1/3 mt-10">
    {uiState ==="enterEmail" && 
        <>
            <div className="">
                <span className="text-1xl text-blue-900 font-semibold capitalize">Enter your registered email</span>
            </div>
            <form className="space-y-3 w-3/4 mx-auto" onSubmit={()=>setUiState("forgetPassword")}>
                <div className="border-2 border-blue-700 flex space-x-2 px-2 py-1.5 rounded-full">
                <HiOutlineMail size={25} className="text-blue-600" />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-transparent focus:outline-none text-sm"
                    onChange={onChange}
                />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 w-full px-3 py-1.5 rounded-md text-gray-50 btn"
                    onSubmit={(e)=>e.preventDefault()}
                >
                    Send OTP
                </button>
            </form>        
            </>
    }
    {uiState ==="forgetPassword" && 
        <>
        {console.log('from',uiState)}
            <div className="">
                <span className="text-lg text-blue-900 font-semibold"> Enter the otp sent in your registed email and set the new password.</span>
            </div>
            <form className="space-y-3 w-3/4 mx-auto" onSubmit={signIn}>
                <div className="border-2 border-blue-700 flex space-x-2 px-2 py-1.5 rounded-full">
                <HiOutlineMail size={25} className="text-blue-600" />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-transparent focus:outline-none text-sm"
                    onChange={onChange}
                />
                </div>
                <div className="border-2 border-blue-700 flex space-x-2 px-2 py-1.5 rounded-full">
                <HiOutlineLockClosed size={25} className="text-blue-600" />
                <input
                    type="password"
                    name="password"
                    placeholder="Passsword"
                    className="bg-transparent focus:outline-none text-sm"
                    onChange={onChange}
                />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 w-full px-3 py-1.5 rounded-md text-gray-50 btn"
                >
                    Login
                </button>
            </form>
        </>
    }
      <span className="text-red-400" role='button' onClick={()=>setUiState('signIn')}>Cancel</span>
    </div>
  );
};

export default ForgotPassword;
