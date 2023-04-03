import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuAlt1Icon, UserCircleIcon } from "@heroicons/react/solid";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white  shadow-md p-3 ">
      <div className="relative flex items-center h-10 md:mx-10 cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          alt=""
          fill
          style={{
            objectFit: "contain",
            objectPosition: "left",
            layout: "fill",
            marginTop: "3px",
          }}
        />
      </div>
      <div className="flex items-center border-2 rounded-full py-2 pl-2 md:shadow-sm overflow-hidden">
        <input
          type="text"
          placeholder="Start your search..."
          className="flex-grow pl-1 bg-transparent outline-none text-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex h-6 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center justify-end space-x-3 mr-4 text-gray-400">
        <p className="hidden md:inline-flex">Become a Host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <MenuAlt1Icon className="h-6" />
            <UserCircleIcon  className="h-6" />
        </div>
      </div>
    </header>
  );
}
