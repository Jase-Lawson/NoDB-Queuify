const axios = require('axios')
const tracks = require('../../Playlists/TeenageAngst.json')
let tracklist = []


module.exports = {

  getPlaylist: (req, res) => {
    let { pizza } = req.body;

    tracklist = tracks.find(el => el.name === pizza)
    console.log(req.body)
    res.status(200).send(tracklist.data)
  }
}