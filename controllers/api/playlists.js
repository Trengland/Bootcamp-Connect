const { Playlist, User } = require('../models');
const { requireAuth } = require('../middleware/auth');


// get User from db who is creating the playlist
router.get('/', requireAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Playlist,
          as: 'playlists',
          attributes: ['id', 'name', 'createdAt'],
          include: ['songs'],
        },
      ],
      attributes: ['id', 'username', 'email'],
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//post to save the song and artist input to the database
router.post('/add-song', requireAuth, async (req, res) => {
    try {
      const { playlistId, songName, artistName } = req.body;
  
      const playlist = await Playlist.findByPk(playlistId);
  
      if (!playlist) {
        return res.status(404).json({ error: 'Playlist not found' });
      }
  
      const song = await Song.create({
        name: songName,
        artist: artistName,
        playlistId: playlist.id,
      });
  
      res.status(201).json({ song });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
