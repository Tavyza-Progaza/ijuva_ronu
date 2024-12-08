export default function HeaderButton({ button }) {
  return (
    <a href={button.url} className="h-full p-4 flex flex-row items-center hover:bg-slate-700 transition-colors">
      {button.text}
    </a>
  )
}
