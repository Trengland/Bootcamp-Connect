
const { Songs } = require('../models');

const songData = [
  {
    title: "The Search",
    artist: "NF",
    genre: "hip-hop",
    album: "The Search"
  },
  {
    title: "The Sound of Silence",
    artist: "Disturbed",
    genre: "Rock",
    album: "Immortalized(Deluxe Edition)"
  },
  {
    title: "Set Fire to the Rain",
    artist: "Adele",
    genre: "Pop Soul",
    album: "21"
  }
] 

const seedSongs = () => Songs.bulkCreate(songData);

module.exports = seedSongs;
