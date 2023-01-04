import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { LightModeIcon, SearchIcon } from '../public/index.js'
import { Sora, JetBrains_Mono } from '@next/font/google'

// Google Fonts imported from @next/font/google
const sora = Sora({
  weight: '700'
})

const jetBrainsMono = JetBrains_Mono()

export default function Home() {
  const [userData, setUserData] = useState({})
  const [searchString, setSearchString] = useState('')
  const [inputString, setInputString] = useState('')
  {/* useEffect(() => { */ }
  {/*   const fetchData = async () => { */ }
  {/*     const response = await fetch(`https://api.github.com/users/${searchString}`) */ }
  {/*     const data = await response.json() */ }
  {/*     setUserData(data) */ }
  {/*   } */ }
  {/*   fetchData() */ }
  {/* }, [searchString]) */ }
  const handleChange = (event) => {
    setInputString(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchString(inputString)
  }
  return (
    <>
      <Head>
        <title>devKhoj</title>
        <meta
          name="description"
          content="A place to find information about developers github account"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`w-full min-h-screen bg-main text-white ${jetBrainsMono.className}`}>
        <header className='max-w-4xl mx-auto'>
          <nav className="flex justify-between py-12">
            <p className={`gradient-text font-bold text-4xl  ${sora.className}`}>devKhoj</p>
            <div className="flex items-center gap-2">
              <p className="text-md tracking-widest">LIGHT</p>
              <Image src={LightModeIcon} alt="light-mode-icon" />
            </div>
          </nav>
          <div id="search-bar" className="max-w-2xl mx-auto pl-8 pr-2 py-2 flex gap-8 w-full bg-lightPurple rounded-lg border-[1px] border-white/10">
            <Image src={SearchIcon} alt="search-icon" />
            <form className='flex justify-between w-full'>
              <input
                type="search"
                className='bg-transparent  text-xl outline-none caret-pink-300'
                placeholder='Search Github User...'
                value={inputString}
                onChange={handleChange}
              />
              <button
                type="submit"
                className='px-8 py-3 bg-gradientButton rounded-md text-lg font-bold  border-[1px] border-[#A4A4A4]'
                onClick={handleSubmit}
              >
                Search
              </button>
            </form>
          </div>
        </header>
        <main className="max-w-4xl mx-auto">
          <section id="profile-card" className="p-12">
          </section>
        </main>
      </div>
    </>
  )
}
