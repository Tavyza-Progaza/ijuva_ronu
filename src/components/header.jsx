import Image from 'next/image'
import HeaderButton from '@/components/headerbutton'
import HeaderClock from '@/components/headerclock'

export default function Header() {
  var buttons = [
    {
      id: 0,
      text: 'testing number 1',
      url: '/testing/1'
    },
    {
      id: 1,
      text: 'testing number 2',
      url: '/testing/2'
    },
    {
      id: 2,
      text: 'testing number 3',
      url: '/testing/3'
    }
  ]

  return (
    <div className="w-full h-24 flex flex-row justify-between items-center bg-slate-900">
      <div className="flex flex-row justify-start items-center gap-4 pl-3">
        <Image
          alt="Tavyza logo"
          src="/resources/images/tavyzalogo-small.png"
          width="1155"
          height="823"
          className="h-16 w-auto"
         />

         <span className="text-3xl">Tavyza</span>

         <HeaderClock />
      </div>

      <div className="flex flex-row justify-end items-center gap-2 h-full pr-3">
        {buttons.map(button => 
          <HeaderButton key={button.id} button={button}/>
        )}
      </div>
    </div>
  )
}
