import React, { Component } from 'react';

class Tracklist extends Component {


  handleAdd = () => {
    const { songs } = this.props;
    let newSong = {
      title: songs.title
    }
    // console.log(`${this.props.songs.title} clicked`)
    this.props.queueSongFn(newSong);
  }

  render() {
    return (
      <div className='playlist-display'
        onDoubleClick={this.handleAdd}
        draggable='true'>
        <div className='playlist-item-1' >
          <h3 className='song-place' >{this.props.songs.id}</h3>
          <img className='album-cover'
            src={this.props.songs.cover}
            alt={`${this.props.songs.title}`} />
          <section className='song-main'>
            <h3 className='song-title' > {this.props.songs.title} </h3>
            <h5 className='artist-name' > {this.props.songs.artist} </h5>
          </section></div>
        <h4 className='album-name'> {this.props.songs.album} </h4>
        <div>
          <h4 className='song-length' > {this.props.songs.length} </h4>
          <button className='q-button' onClick={this.handleAdd}>+</button>
        </div>
      </div>
    )
  }
}

export default Tracklist
