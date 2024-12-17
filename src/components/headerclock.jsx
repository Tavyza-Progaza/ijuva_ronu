import { useEffect, useState } from 'react'

export default function HeaderClock() {
  // il gelju midea þušy au sa ni naran
  var kadenon = ['seðysa', 'ysto', 'šomi', 'þaša', 'koža']
  var kanan = ['ukeð', 'tersi', 'naki', 'sosaš', 'zeža', 'kasað', 'mešto', 'yntaija', 'ðesoðo', 'sasað', 'þareið', 'retað']
  var [jaž, setJaž] = useState('')
  var [long, setLong] = useState('')

  useEffect(() => {
    function jazh_lakaz() {
      // 14k: timezone offset, 10,4 billion: epoch offset (for 1639 - 20 days, 4 jaž, and ~44 vaus)
      var time = ((Date.now() / 1000) - 14000) + 10436687604
      var now = Date.now()
      var nextTick = Math.ceil(now / 64) * 64
      var vaus = Math.floor(time / 0.864) % 100
      var jazh = Math.floor(time / 86.4) % 1000

      //date
      var epoch = 0
      var hykos = Math.floor(time / 31556926)
      var leapdays = 0

      for (var year = epoch; year <= hykos; year++) {
        if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 === 0)) {
          leapdays++
        }
      }

      var leapyear = ((hykos % 4 == 0 && hykos % 100 !== 0) || (hykos % 400 === 0))
      var šomikanan = leapyear ? 74 : 73

      var kana = Math.floor(time / 86400) % (365 + (leapyear ? 1 : 0))
      var kadeno = 0
      var monthlength = [73, 73, šomikanan, 73, 73]

      for (var i = 0; i < monthlength.length; i++) {
       if (kana < monthlength[i]) {
          kadeno = i
          break
        }
        kana -= monthlength[i]
      }

      var weekday = kanan[Math.floor(kana % 12)]
    
      setJaž(jazh.toFixed(0) + ':' + vaus.toFixed(0).padStart(2, '0'))
      setLong(weekday + ', ' + Math.floor(kana + 1) + ' ' + kadenon[kadeno - 1] + ', ' + Math.floor(hykos))

      setTimeout(jazh_lakaz, nextTick - now)
    }

    jazh_lakaz()
  })

  return (
    <span className="text-sm hidden md:block">
      {jaž} {long}
    </span>
  )
}
