import { faBuysellads, faWindows } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleLeft , faFile, faHome, faThLarge, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Header() {
  const navItems = ["posts"];

  return (
    <header className="flex justify-between items-center sticky top-0 z-50 bg-gray-900 px-4">
      <div className="logo">
        <h3 className="text-2xl text-white py-2">NewsBay</h3>
      </div>
      <nav className="hidden md:flex space-x-6 mx-2">
        <Link href="/dashboard">
          <a className="panel_nav_item">
            <FontAwesomeIcon icon={faHome} flip="horizontal" className="h-5" />
            <span className="">Dashboard </span>
          </a>
        </Link>
        <Link href="/posts">
          <a className="panel_nav_item">
            <FontAwesomeIcon icon={faFile} flip="horizontal" className="h-5" />
            <span className="">Posts </span>
          </a>
        </Link>
        <Link href="/categories">
          <a className="panel_nav_item">
            <FontAwesomeIcon icon={faThLarge} flip="horizontal" className="h-5" />
            <span className="">Categories</span>
          </a>
        </Link>
        <Link href="/ads">
          <a className="panel_nav_item">
            <FontAwesomeIcon icon={faBuysellads} flip="horizontal" className="h-5" />
            <span className="">Ads</span>
          </a>
        </Link>
        <Link href="/users">
          <a className="panel_nav_item">
            <FontAwesomeIcon icon={faUser} flip="horizontal" className="h-5" />
            <span className="">Users</span>
          </a>
        </Link>
        <Link href="/posts">
          <a className="panel_nav_item">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} flip="horizontal" className="h-5" />
            <span className="">Logout</span>
          </a>
        </Link>
       
      </nav>
    </header>
  );
}

export default Header;
