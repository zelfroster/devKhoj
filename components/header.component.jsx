import Image from 'next/image'
import Link from 'next/link'
import { SiGithub } from 'react-icons/si'

import { SearchIcon } from "../public/icons";

import { Sora } from "@next/font/google";

const sora = Sora({
  weight: "700",
  subsets: "latin",
});

const Header = ({ inputString, setInputString, setSearchString }) => {
  const handleChange = (event) => {
    setInputString(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchString(inputString);
  };
  return (
    <header className="container mx-auto">
      <nav className="flex justify-between py-10 md:py-12">
        <p className={`gradient-text font-bold text-3xl ${sora.className}`}>
          devKhoj
        </p>
        <Link
          href={'https://github.com/zelfroster/devkhoj'}
        >
          <SiGithub className="text-4xl p-1 rounded-md bg-gradient-to-r from-[#FF6C6CCC] to-[#8C8AFFCC] hover:from-[#FF6C6C00] hover:border-[1px] hover:border-white/20 hover:to-[#8C8AFF00]" />
        </Link>
      </nav>
      <div
        id="search-bar"
        className="max-w-3xl mx-auto pl-4 pr-3 py-3 flex flex-row-reverse gap-4 w-full bg-lightPurple rounded-lg border-[1px] border-white/10 md:gap-8 md:pl-8 md:flex-row"
      >
        <Image src={SearchIcon} width={25} height={25} className="cursor-pointer md:w-8" alt="search-icon" onClick={handleSubmit} />
        <form className="flex justify-between w-full">
          <input
            type="search"
            className="w-full bg-transparent text-white/80 text-md outline-none caret-pink-300 md:text-xl"
            placeholder="Search Github User..."
            value={inputString}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="hidden px-6 py-2 bg-gradientButton rounded-md text-lg font-bold  border-[1px] border-[#A4A4A4] duration-300 hover:border-[#D4D4D4] md:py-3 md:px-8 md:block"
            onClick={handleSubmit}
          >
            Search
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header
