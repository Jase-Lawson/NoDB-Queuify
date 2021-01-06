let queuedSongs = []
let id = 1

module.exports = {

  getQueuedSongs: (req, res) => {
    res.status(200).send(queuedSongs)
  },

  queueSong: (req, res) => {
    const { songs } = req.body;

    songs.id = id;
    id++;

    queuedSongs.push(songs);
    res.status(200).send(queuedSongs);
  },

  moveUp: (req, res) => {
    const { id } = req.params;

    const index = queuedSongs.findIndex(el => el.id === +id);

    if (index > 0) {
      let [tmp] = queuedSongs.splice(index, 1) /* splices obj out of arr */
      queuedSongs.splice(index - 1, 0, tmp)
    };

    res.status(200).send(queuedSongs)
  },

  moveDown: (req, res) => {
    const { id } = req.params;

    const index = queuedSongs.findIndex(el => el.id === +id);

    if (index < queuedSongs.length - 1) {
      let [tmp] = queuedSongs.splice(index, 1) /* splices obj out of arr */
      queuedSongs.splice(index + 1, 0, tmp)
    };

    res.status(200).send(queuedSongs)
  },

  deleteSong: (req, res) => {
    const { id } = req.params;

    const index = queuedSongs.findIndex(el => el.id === +id);
    queuedSongs.splice(index, 1);

    res.status(200).send(queuedSongs)
  },

  deleteAll: (req, res) => {

    queuedSongs = [];
    res.status(200).send(queuedSongs);
  }
}