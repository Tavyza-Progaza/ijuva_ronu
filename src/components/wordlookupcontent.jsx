export default function WordLookupContent({ wordlist }) {
  var types = {
    "V": "Verb",
    "InN": "Inanimate noun",
    "AnN": "Animate noun",
    "IntV": "Intransitive verb",
    "TrV": "Transitive verb",
    "Adj": "Adjective",
    "INT": "Interjection",
    "PRT": "Particle",
    "PP": "Postposition",
    "AnPrn": "Animate pronoun",
    "InPrn": "Inanimate pronoun"
  }
  
  // {"type":"AnN","":"","progaza":"jama","english translation":"llama","extended def":"","origin language":""}

  return (
    <div className="flex flex-row flex-wrap gap-3 w-full">
      {wordlist.map(word =>
        <div key={wordlist.indexOf(word)} className="p-5 bg-gray-800 rounded-md flex flex-col items-center justify-start gap-2 md:basis-1/3 flex-grow text-center">
          <span className="text-2xl">{word['']} - {word['english translation']}</span>
          <span className="">Type: {types[word.type] || 'unknown'}</span>
          <span>Extended Definition: {word['extended def'] || 'none'}</span>
          <span>Origin Language: {word['origin language']}</span>
        </div>
      )}
    </div>
  )
}
