export default function HeaderHamburgerButton({ button }) {
  return (
    <a href={button.url} className="w-full p-4 flex flex-row align-center hover:bg-slate-400 transition-colors">
      {button.text}
    </a>
  )
}