import React, { Component } from "react";

class UpNext extends Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className='queued-songs'>
        {this.props.queuedSongs.title}
        <div>
          <button className='button-style'
            onClick={() => this.props.upFn(this.props.queuedSongs.id)}
          > ▲ </button>
          <button className='button-style'
            onClick={() => this.props.downFn(this.props.queuedSongs.id)}
          > ▼ </button>
          <button className='button-style'
            onClick={() => { this.props.deleteSong(this.props.queuedSongs.id) }}> X </button>
        </div>
      </div>
    )
  }
}


export default UpNext