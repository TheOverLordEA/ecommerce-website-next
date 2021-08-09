import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Search = (props) => {
  return (
    <div className="flex items-center flex-1 p-0 border-1 md:border-2 rounded-full bg-white pr-1 md:shadow-sm">
      <input
        type="text"
        value={props.value}
        placeHolder="Start Search"
        className="rounded-full flex-1 p-2 outline-none text-gray-800 pl-5 md:mx-2 flex-grow text-sm placeholder-gray-500"
      />

      <SearchIcon className="h-8 bg-indigo-500 rounded-full text-white p-1 hidden md:inline-flex cursor-pointer" />
    </div>
  );
};

export default Search;
