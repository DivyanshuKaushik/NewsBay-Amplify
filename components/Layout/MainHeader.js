import Link from "next/link";
import { FaSearch } from "react-icons/fa";
const category = [
  "Sports",
  "Bussiness",
  "National",
  "state",
  "local",
  "media",
  "bollywood",
  "tech",
];

const MainHeader = () => {
  return (
    <header className="sticky z-40 shadow-lg px-4 md:px-10 mx-auto">
      <center>
        <Link href="/">
          <a className="text-center text-2xl md:text-5xl text-gray-800 font-serif font-semibold py-2">
            NewsBay
          </a>
        </Link>
      </center>
      <hr className="bg-black pt-0.5 my-2 md:my-3"/>
      <div className="flex justify-around items-center">
        <nav className="flex overflow-x-scroll scrollbar-hide">
          {category.map((item, i) => (
            <Link key={i} href={`/category/${item}`}>
              <a className="text-gray-700 text-sm font-semibold uppercase py-3 mx-3 hover:text-gray-800">
                {item}
              </a>
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <FaSearch size={16} />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
