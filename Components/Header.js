import Image from "next/image";
import { useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuAlt1Icon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
export default function Header({ placeholder }) {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const resetInput = () => setSearchInput("");
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white  shadow-md p-3 ">
      <div
        className="relative flex items-center h-10 md:mx-10 cursor-pointer"
        onClick={() => router.push("/")}
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || "Start your search.."}
          className="flex-grow pl-1 bg-transparent outline-none text-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex h-6 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center justify-end space-x-3 mr-4 text-gray-400">
        <p className="hidden md:inline-flex">Become a Host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuAlt1Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto max-w-md md:max-w-lg border-t mt-3 p-2">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4 mt-3">
            <h2 className="text-2xl font-semibold flex-grow shadow-sm">
              Number of Guests
            </h2>
            <UserCircleIcon className="h-5 text-gray-400" />
            <input
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              min="1"
              type="number"
              className="w-12 pl-2 text-lg font-bold outline-none text-red-400"
            ></input>
          </div>
          <div className="flex mb-2">
            <button
              className="flex-grow font-semibold text-gray-500 bg-gray-200 rounded-lg cursor-pointer mx-2 shadow-sm"
              onClick={resetInput}
            >
              Cancel
            </button>
            <button
              className="flex-grow font-bold text-white bg-red-500 rounded-lg mx-2 shadow-md cursor-pointer hover:scale-105 transform transition duration-300 ease-out"
              onClick={() => search()}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
