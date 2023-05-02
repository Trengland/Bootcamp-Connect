const { Playlist, User } = require('../models');
const { requireAuth } = require('../middleware/auth');


// get User from db
router.get('/', requireAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Playlist, // should this be indBio now?
          as: 'playlists', // should this be as: 'bio' OR as: 'indBio'?
          attributes: ['id', 'name', 'createdAt'], // do we still need createdAt?
          include: ['songs'], //is this where i will include quote, movies_shows, birthday, hobbies, etc.?
        },
      ],
      attributes: ['id', 'username', 'email'], // do we need username AND email? or just username?
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
// do i now need to include the other things being posted to the db here? (hobbiers, quote, birthday, songs, etc.?)
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
