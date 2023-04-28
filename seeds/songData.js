
const { Song } = require('../models');

const songData = [
  {
    "title": "The Search",
    "Artist": "NF",
    "Genre": "hip-hop",
    "Album": "The Search"
  },
  {
    "title": "The Sound of Silence",
    "Artist": "Disturbed",
    "Genre": "Rock",
    "Album": "Immortalized(Deluxe Edition)"
  },
  {
    "title": "Set Fire to the Rain",
    "Artist": "Adele",
    "Genre": "Pop Soul",
    "Album": "21"
  }
] 

const seedSongs = () => Song.bulkCreate(SongData);

module.exports = seedSongs;
