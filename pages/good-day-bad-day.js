import { useEffect, useState } from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { isPast } from 'date-fns'

export default function GDBD() {
  const [distance, setDistance] = useState('')
  let deadline = new Date(2020, 9, 2, 0, 0, 0)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPast(deadline)) {
        setDistance('Good Day Bad Day is out!')
        return;
      }
      let _distance = formatDistanceToNowStrict(
        deadline,
        { includeSeconds: true }
      )
      setDistance(`GDBD drops in ${_distance}!`)
    }, 1000)
    return () => clearTimeout(timer)
  }, [distance])
  return (
    <div className="h-screen grid justfiy-center content-center text-center bg-black">
      <span className="text-6xl text-white">{distance}</span>
      <iframe
        className="place-self-center"
        height="300"
        width="300"
        data-lnk-widget
        src="https://elohim.lnk.to/GDBD/widget"
        allowtransparency="true">
      </iframe>
    </div>
  )
}
