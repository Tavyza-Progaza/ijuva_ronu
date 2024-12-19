import Head from 'next/head'
import { useState } from 'react'

import Header from '@/components/header'
import WordLookupContent from '@/components/wordlookupcontent'

export default function WordLookup() {
  const [ search, setSearch ] = useState('')
  const [ searchPrg, setSearchPrg] = useState('')
  const [ status, setStatus ] = useState(0) // 0-startup, 1-loading, 2-loaded, 3-error
  const [ data, setData ] = useState([])
  
  function handleSearchChange(e) {
    setSearch(e.target.value)
  }

  function handleSearchChangePrg(e) {
    setSearchPrg(e.target.value)
  }

  function handleEnterClick(e) {
    if (e.key == 'Enter') {
      handleSubmit()
    }
  }

  function handleEnterClickPrg(e) {
    if (e.key == 'Enter') {
      handleSubmitPrg()
    }
  }
  
  function handleSubmit() {
    setStatus(1)

    var xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
          var data = JSON.parse(xhttp.response)

          setData(data.results)
          setStatus(2)
        } else {
          setStatus(3)
        }
      }
    }

    var data = JSON.stringify({ query: search })

    xhttp.open('POST', '/api/wordlookup/lookup-english', true)
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send(data)
  }

  function handleSubmitPrg() {
    setStatus(1)

    var xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
          var data = JSON.parse(xhttp.response)

          setData(data.results)
          setStatus(2)
        } else {
          setStatus(3)
        }
      }
    }

    var data = JSON.stringify({ query: searchPrg })

    xhttp.open('POST', '/api/wordlookup/lookup-progaza', true)
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send(data)
  }

  return (
    <div>
      <Head>
        <title>Word Lookup - Tavyza</title>
      </Head>

      <Header />

      <div className="flex flex-col gap-6 items-center p-10">
        <span className="text-5xl text-center">Progaza Word Lookup</span>

        <div className="flex flex-col items-center gap-3 p-3 bg-gray-900 rounded-lg w-full md:w-2/3">
        <div className="flex flex-row gap-3 justify-between w-full">
            <input type="text" onChange={handleSearchChange} onKeyDown={handleEnterClick} placeholder="Search for words..." className="w-9/12 px-2 py-1 bg-gray-800 rounded-md" />
            <button onClick={handleSubmit} className="w-3/12 px-2 py-1 bg-gray-800 rounded-md">Search</button>
          </div>

          <div className="flex flex-row gap-3 justify-between w-full">
            <input type="text" onChange={handleSearchChangePrg} onKeyDown={handleEnterClickPrg} placeholder=" ..." className="w-9/12 px-2 py-1 bg-gray-800 rounded-md" />
            <button onClick={handleSubmitPrg} className="w-3/12 px-2 py-1 bg-gray-800 rounded-md"></button>
          </div>
          
          {status == 0 ? <span>Search to load results</span> : null}
          {status == 1 ? <span>Loading...</span> : null}
          {status == 2 && data.length > 0 ? <WordLookupContent wordlist={data}/> : null}
          {status == 2 && data.length == 0 ? <span>No results found</span> : null}
          {status == 3 ? <span>An error occured, please try again</span> : null}
        </div>
      </div>
    </div>
  )
}
