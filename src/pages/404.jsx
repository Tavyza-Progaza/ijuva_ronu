import Head from 'next/head'
import Image from 'next/image'

import Header from '@/components/header'

export default function Custom404(){
  return (
    <div>
      <Head>
        <title>404 - Tavyza</title>
      </Head>

      <Header />

      <div className="flex flex-col min-h-full h-full gap-7 md:gap-14 justify-between items-center p-14 text-center">
        <Image
          alt="Tavyza logo"
          src="/resources/images/tavyzalogo.png"
          width="1155"
          height="823"
          className="h-auto w-64 mb-10"
        />

        <span className="text-7xl leading-[96px] md:leading-3">   </span>
        <span className="text-3xl">The page does not exist.</span>
      </div>
    </div>
  )
}
