import React from 'react'
import UpNext from './UpNext';

const Queue = (props) => {
  const mappedSongs = props.queuedSongs.map((queuedSongs, i) => (
    <UpNext
      key={i}
      queuePlace={i}
      queuedSongs={queuedSongs}
      upFn={props.upFn}
      downFn={props.downFn}
      deleteSong={props.deleteSong} />
  ))

  // console.log(mappedSongs)
  return (
    <div className='queue'>
      <h2 className='queue-header'
      >QUEUED SONGS
        <button className='q-button'
          onClick={props.deleteAll}
        >clear
          </button>
      </h2>
      <h4>{mappedSongs}</h4>
    </div >
  )

}

export default Queue