import Link from "next/link";
import {
  FaArrowAltCircleLeft,
  FaBuysellads,
  FaFile,
  FaHome,
  FaThLarge,
  FaUser,
} from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import { Auth } from "aws-amplify";
import useAuthenticatedUser from "../hooks/authenticatedUser";
import { useEffect, useState } from "react";

function Header() {
  const navItems = ["posts"];
  // const [user,setUser] = useState(null)
  // useEffect(()=>{
  //     checkUser()
  //     async function checkUser(){
  //         try{
  //             const user = await Auth.currentAuthenticatedUser()
  //             setUser(user)
  //         }catch(err){
  //             setUser(null)
  //         }
  //     }
  // },[])
  const user = useAuthenticatedUser()
  return (
    <header className="flex justify-between items-center sticky top-0 z-50 bg-gray-700 px-4">
      <div className="logo">
        <h3 className="text-2xl text-white py-2">NewsBay</h3>
      </div>
      <nav className="hidden md:flex space-x-6 mx-2">
        {user ? (
          <>
            <Link href="/dashboard">
              <a className="panel_nav_item">
                <FaHome size={18} className="" />
                <span className="">Dashboard </span>
              </a>
            </Link>
            <Link href="/posts">
              <a className="panel_nav_item">
                <FaFile size={16} className="" />
                <span className="">Posts </span>
              </a>
            </Link>
            <Link href="/categories">
              <a className="panel_nav_item">
                <FaThLarge size={16} />
                <span className="">Categories</span>
              </a>
            </Link>
            <Link href="/ads">
              <a className="panel_nav_item">
                <FaBuysellads size={18} />
                <span className="">Ads</span>
              </a>
            </Link>
            <Link href="/users">
              <a className="panel_nav_item">
                <FaUser size={16} />
                <span className="">Users</span>
              </a>
            </Link>
            <button className="panel_nav_item" onClick={() => Auth.signOut()}>
              <FaArrowAltCircleLeft size={16} />
              <span className="">Logout</span>
            </button>
          </>
        ) : (
          <>
            <Link href="/auth/signin">
              <a className="panel_nav_item">
                <GoSignIn size={16} />
                <span className="">Login</span>
              </a>
            </Link>
            <Link href="/auth/signup">
              <a className="panel_nav_item">
                <GoSignIn size={16} />
                <span className="">SignUp</span>
              </a>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
