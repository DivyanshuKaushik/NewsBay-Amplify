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
// import { Auth } from "aws-amplify";
import useAuthenticatedUser from "../../hooks/authenticatedUser";
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
  const user = useAuthenticatedUser() || true
  return (

      <header className="sticky top-0 z-50 bg-cyan-900 px-4 overflow-x-scroll scrollbar-hide">
        <nav className="flex md:justify-center items-center overflow-x-scroll scrollbar-hide">
          {user && (
            <>
              <Link href="/dashboard">
                <a className="panel_nav_item">
                  <FaHome size={14} className="" />
                  <span className="">Dashboard </span>
                </a>
              </Link>
              <Link href="/posts">
                <a className="panel_nav_item">
                  <FaFile size={12} className="" />
                  <span className="">Posts </span>
                </a>
              </Link>
              <Link href="/category/manage">
                <a className="panel_nav_item">
                  <FaThLarge size={12} />
                  <span className="">Categories</span>
                </a>
              </Link>
              <Link href="/ads">
                <a className="panel_nav_item">
                  <FaBuysellads size={12} />
                  <span className="">Ads</span>
                </a>
              </Link>
              <Link href="/users">
                <a className="panel_nav_item">
                  <FaUser size={12} />
                  <span className="">Users</span>
                </a>
              </Link>
              <button className="panel_nav_item" >
                <FaArrowAltCircleLeft size={12} />
                <span className="">Logout</span>
              </button>
            </>
          )}
        </nav>
      </header>
  );
}

export default Header;
