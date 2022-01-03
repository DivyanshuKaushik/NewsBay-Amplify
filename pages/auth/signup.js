import { HiOutlineLockClosed, HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import {FcGoogle} from 'react-icons/fc'
import { FaFacebook } from "react-icons/fa";
import Link from "next/link"
import { Auth } from "aws-amplify";

const SignUpPage = () => {
    return (
        <main className="min-h-full w-full flex justify-center items-center">
      <div className="flex flex-col space-y-4 border shadow-xl rounded-2xl p-3 px-5 w-4/5 md:w-1/3 mt-10">
        <div className="">
          <span className="text-3xl text-blue-900 font-semibold">Welcome</span>
          <h3 className="text-lg text-gray-600 capitalize">Create New Account</h3>
        </div>
        <div className="w-2/3 md:w-1/2 mx-auto space-y-3">
            <button className="flex items-center w-full bg-gray-200 p-2 rounded-full" onClick={()=>Auth.federatedSignIn({provider:"Google"})}>
                <FcGoogle size={25} />
                <span className="ml-2 text-sm text-gray-800">Sign in with Google</span>
            </button>
            <button className="flex items-center w-full text-white bg-blue-900 p-2 rounded-full">
                <FaFacebook  size={25} className=""/>
                <span className="ml-2 text-sm">Sign in with Facebook</span>
            </button>
        </div>
        <center className="my-2 font-semibold">OR</center>
        <form className="space-y-3 w-3/4 mx-auto">
          <div className="border-2 border-blue-700 flex space-x-2 px-2 py-1.5 rounded-full">
            <HiOutlineUser size={25} className="text-blue-600" />
            <input type="text" name="name" placeholder="Name" className="bg-transparent focus:outline-none text-sm" />
          </div>
          <div className="border-2 border-blue-700 flex space-x-2 px-2 py-1.5 rounded-full">
            <HiOutlineMail size={25} className="text-blue-600" />
            <input type="email" name="email" placeholder="Email" className="bg-transparent focus:outline-none text-sm" />
          </div>
          <div className="border-2 border-blue-700 flex space-x-2 px-2 py-1.5 rounded-full">
            <HiOutlineLockClosed size={25} className="text-blue-600" />
            <input type="password" name="password" placeholder="Passsword" className="bg-transparent focus:outline-none text-sm" />
          </div>
          <div className="text-sm text-blue-400">
              <Link href="/auth/signin" >Already Have An Account?</Link>
          </div>
          <div className="flex justify-end">
              <button type="submit" className="bg-blue-600 px-3 py-1.5 rounded-md text-gray-50 btn">SignUp</button>
          </div>
        </form>
      </div>    
    </main>
    )
}

export default SignUpPage
