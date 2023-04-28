
const { Playlist } = require('../models');

const playlistData = [
  {
    " playlist_name": "Seed playlist1",
    " user_id": 1
  },
  {
    " playlist_name": "Seed playlist2",
    " user_id": 2
  },
  {
    " playlist_name": "Seed playlist3",
    " user_id": 3
  }
]

const seedPlaylist = () => Playlist.bulkCreate(playlistData);

module.exports = seedPlaylist;
