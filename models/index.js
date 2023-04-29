const User = require("./User");
const Playlist = require("./Playlist");
const Songs = require("./Songs");
const PlaylistSong = require("./PlaylistSong");

User.hasMany(Playlist, {
  foreignKey: "user_id",
});
Playlist.belongsTo(User, {
  foreignKey: "user_id",
});

Playlist.belongsToMany(Songs, {
  through: PlaylistSong,
  foreignKey: "playlist_id",
});
Songs.belongsToMany(Playlist, {
  through: PlaylistSong,
  foreignKey: "song_id",
});

module.exports = { Playlist, PlaylistSong, Songs, User };
