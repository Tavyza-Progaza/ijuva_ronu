export default function WordLookupContent({ wordlist }) {
  return (
    <div className="flex flex-col gap-3">
      {wordlist.map(word => 
        <div key={wordlist.indexOf(word)} className="w-full h-32 p-4 bg-gray-800 rounded-md flex flex-col items-center justify-center">
          <span>{JSON.stringify(word)}</span>
          <span>yeah idk what else to put here as i dont know the specifics of which things need to be where</span>
          <span>so i just put that thing idk</span>
        </div>
      )}
    </div>
  )
}
