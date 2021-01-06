import React, { Component } from 'react';
import axios from 'axios';
import Tracklist from './Tracklist';
import Sidebar from './Sidebar';

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songsList: [],
      playlistName: 'Select a Playlist',
    }
  }

  componentDidMount() {
    // this.getSongsList();

  }

  getSongsList = (e) => {
    let body = { pizza: e.target.value };
    this.setState({ playlistName: e.target.value })

    axios.put('/api/songs-list', body)
      .then(res => this.setState({ songsList: res.data }))
      .catch(err => console.log(err))
  }

  render() {

    // console.log(this.state.songsList)

    const mappedSongs = this.state.songsList.map((song, i) => (
      <Tracklist
        key={i}
        songs={song}
        queueSongFn={this.props.queueSongFn} />

    ))

    // < Sidebar />
    return (
      <div className='app'>
        <Sidebar getSongsListFn={this.getSongsList} />
        <div className='playlist'>
          <h2 className='displayed-playlist'> {this.state.playlistName} </h2>
          <div className='songs-list'>{mappedSongs}</div>
        </div>
      </div>
    )
  }
}

export default Playlist