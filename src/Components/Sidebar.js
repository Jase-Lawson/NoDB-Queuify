import React from 'react';

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
      <h2 id='library'>Library</h2>
      <div className='sidebar-library'>
        <button className='sidebar-button'
          value='Teenage Angst'
          onClick={props.getSongsListFn}
        >Teenage Angst</button>
        <button className='sidebar-button'
          value='Singing in the Shower'
          onClick={props.getSongsListFn}
        >Singing in the Shower</button>
        <button className='sidebar-button'
          value='Road Tripping'
          onClick={props.getSongsListFn}
        >Road Tripping</button>
        <button className='sidebar-button'
          value='Old Skool'
          onClick={props.getSongsListFn}
        >Old Skool</button>
        <button className='sidebar-button'
          value='Rock & Roll'
          onClick={props.getSongsListFn}
        >Rock & Roll</button>
        <button className='sidebar-button'
          value='Acoustics'
          onClick={props.getSongsListFn}
        >Acoustics</button>
        <button className='sidebar-button'
          value='Lo-Fi'
          onClick={props.getSongsListFn}
        >Low-Fi</button>
      </div>
    </div>
  )
}

export default Sidebar