import Head from 'next/head'
import { useState } from 'react'

import Header from '@/components/header'
import WordLookupContent from '@/components/wordlookupcontent'

export default function WordLookup() {
  const [ search, setSearch ] = useState('')
  const [ status, setStatus ] = useState(0) // 0-startup, 1-loading, 2-loaded, 3-error
  const [ data, setData ] = useState([])
  
  function handleSearchChange(e) {
    setSearch(e.target.value)
  }
  
  function handleSubmit() {
    setStatus(2)
    setData([
      {"type":"TrV","":"","progaza":"haunaty","english translation":"to stab","extended def":"","origin language":""},
      {"type":"AnPrn","":"","progaza":"ja","english translation":"you","extended def":"2nd person singular","origin language":" "},
      {"type":"IntV","":"","progaza":"jaði","english translation":"to fall, to trip","extended def":"","origin language":" "},
      {"type":"AnN","":"","progaza":"jama","english translation":"llama","extended def":"","origin language":""}
    ])
  }

  return (
    <div>
      <Head>
        <title>Word Lookup - Tavyza</title>
      </Head>

      <Header />

      <div className="flex flex-col gap-6 items-center p-10">
        <span className="text-5xl">Progaza Word Lookup</span>

        <div className="flex flex-col items-center gap-3 p-3 bg-gray-900 rounded-lg w-2/3">
          <div className="flex flex-row gap-3 justify-between w-full">
            <input type="text" onChange={handleSearchChange} placeholder="Search the index..." className="w-11/12 px-2 py-1 bg-gray-800 rounded-md" />
            <button onClick={handleSubmit} className="w-1/12 px-2 py-1 bg-gray-800 rounded-md">Search</button>
          </div>
          
          {status == 0 ? <span>Search to load results</span> : null}
          {status == 1 ? <span>Loading...</span> : null}
          {status == 2 ? <WordLookupContent wordlist={data}/> : null}
          {status == 3 ? <span>An error occured. Please try again.</span> : null}
        </div>
      </div>
    </div>
  )
}
