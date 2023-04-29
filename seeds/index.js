const seedPlaylist = require('./playlistData');
const seedSongs = require('./songData');
const seedUser = require('./userData');
const seedPlaylistSong = require('./playlist-song');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedPlaylist();
  console.log('\n----- PLAYLIST SEEDED -----\n');

  await seedSongs();
  console.log('\n----- SONGS SEEDED -----\n');

  await seedPlaylistSong();
  console.log('\n----- PLAYLIST SONG SEEDED -----\n');

  process.exit(0);
};

seedAll();
