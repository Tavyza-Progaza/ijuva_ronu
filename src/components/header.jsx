import Image from 'next/image'
import { useState } from 'react'

import HeaderButton from '@/components/headerbutton'
import HeaderHamburgerButton from '@/components/headerhamburgerbutton'
import HeaderClock from '@/components/headerclock'

export default function Header() {
  const [ hamburgerOpen, setHamburgerOpen ] = useState(false)

  var buttons = [
    {
      id: 0,
      text: 'Home',
      url: '/'
    },
    {
      id: 1,
      text: 'Word Lookup',
      url: '/wordlookup'
    },
    {
      id: 2,
      text: 'Tavyza Information',
      url: '/info'
    },
    {
      id: 3,
      text: 'Library',
      url: '/library'
    },
    {
      id: 4,
      text: 'Resources',
      url: '/downloads'
    }
  ]

  function handleHamburgerClick() {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div className="w-full h-24 flex flex-row justify-between items-center bg-slate-900">
      <div className="flex flex-row justify-start items-center gap-4 pl-3">
        <Image
          alt="Tavyza logo"
          src="/resources/images/tavyzalogo-small.png"
          width="211"
          height="150"
          className="h-16 w-auto"
        />

        <span className="text-3xl">Tavyza</span>

        <HeaderClock />
      </div>

      <button className="md:hidden h-24 p-4 flex flex-row items-center hover:bg-slate-700 transition-colors">
        <Image
          alt="Menu opener"
          src="/resources/images/hamburger-menu.svg"
          width="100"
          height="100"
          className="invert h-16 w-auto"
          onClick={handleHamburgerClick}
        />
      </button>

      <div className="hidden md:flex flex-row justify-end items-center gap-2 h-full pr-3">
        {buttons.map(button => 
          <HeaderButton key={button.id} button={button}/>
        )}
      </div>

      <div className={(hamburgerOpen ? 'left-0' : '-left-96') + ' w-64 top-0 fixed md:hidden transition-[left] delay-250 h-full bg-slate-600 drop-shadow-[20px_-10px_20px_rgba(0,0,0,.75)]'}>
        <button className="w-full p-4 flex flex-row align-center bg-slate-500 hover:bg-slate-400 transition-colors" onClick={handleHamburgerClick}>
          <strong>Menu --- Close</strong>
        </button>
        {buttons.map(button => 
          <HeaderHamburgerButton key={button.id} button={button}/>
        )}
      </div>
    </div>
  )
}
