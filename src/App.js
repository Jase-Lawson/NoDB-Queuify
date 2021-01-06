import Header from './Components/Header';
// import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Playlist from './Components/Playlist';
import Queue from './Components/Queue';
import React, { Component } from 'react';
import axios from 'axios';

// import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queuedSongs: []
    }
  }

  componentDidMount() {
    axios.get('/api/queued-songs')
      .then(res => {
        this.setState({ queuedSongs: res.data })
      })
      .catch(err => console.log(err))
  }

  queueSong = (songs) => {
    axios.post(`/api/queued-songs`, { songs: songs })
      .then(res => this.setState({ queuedSongs: res.data }))
      .catch(err => console.log(err))
  }

  moveUp = (id, queuePlace) => {
    let body = { queuePlace: queuePlace };

    axios.put(`/api/queued-songs-up/${id}`, body)
      .then(res => this.setState({ queuedSongs: res.data }))
      .catch(err => console.log(err))
  }

  moveDown = (id, queuePlace) => {
    let body = { queuePlace: queuePlace };

    axios.put(`/api/queued-songs-down/${id}`, body)
      .then(res => this.setState({ queuedSongs: res.data }))
      .catch(err => console.log(err))
  }

  deleteSong = (id) => {
    axios.delete(`/api/queued-songs-delete-song/${id}`)
      .then(res => this.setState({ queuedSongs: res.data }))
      .catch(err => console.log(err))
  }

  deleteAll = (id) => {
    axios.delete(`/api/queued-songs-delete-all/${id}`)
      .then(res => this.setState({ queuedSongs: res.data }))
      .catch(err => console.log(err))
  }


  render() {
    // console.log(this.state.queuedSongs)
    return (
      <div >
        <Header />
        <div className="app">
          {/* <Sidebar /> */}
          <div>
            <Playlist
              queueSongFn={this.queueSong} />
          </div>
          <Queue
            queuedSongs={this.state.queuedSongs}
            upFn={this.moveUp}
            downFn={this.moveDown}
            deleteSong={this.deleteSong}
            deleteAll={this.deleteAll} />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default App;
