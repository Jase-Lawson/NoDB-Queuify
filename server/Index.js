const express = require('express'),
  playCtrl = require('./Controllers/playlistCtrl'),
  songCtrl = require('./Controllers/songCtrl')

app = express(),
  port = 5434;

app.use(express.json())

app.put('/api/songs-list', playCtrl.getPlaylist)

app.get('/api/queued-songs', songCtrl.getQueuedSongs)

app.post('/api/queued-songs', songCtrl.queueSong)

app.put('/api/queued-songs-up/:id', songCtrl.moveUp)

app.put('/api/queued-songs-down/:id', songCtrl.moveDown)

app.delete('/api/queued-songs-delete-song/:id', songCtrl.deleteSong)

app.delete('/api/queued-songs-delete-all/:id', songCtrl.deleteAll)

app.listen(port, () => console.log(`Listening on Port: ${port}`))