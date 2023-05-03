const { Bio } = require('../models');

const bioData =[
  {
    user_id: 1,
    birth_day: 05-02-1993,
    linkedin: "mox.ufo@gmaail.com",
    github: "https://github.com/MoxUFO",
    favorite_hobby: "video games, football , Dungeons and Dragons",
    favorite_movies_or_tv_shows: "Futurama, Community, 300",
    favorite_songs:"LONG GONE, The Sound of Silence, Could Have Been Me",
    favorite_quote:"Everything I,m not made me everything I am! - Kanye West"
  },
  {
    user_id: 2,
    birth_day: 09-25-1984,
    linkedin: "https://www.linkedin.com/in/tiffany-england-39374b55/",
    github: "https://github.com/Trengland",
    favorite_hobby: "boating, paddleboarding",
    favorite_movies_or_tv_shows: "Friends, Forrest Gump, Forensic Files",
    favorite_songs: "Cover of The Rolling Stones, Wasted Time, Vienna",
    favorite_quote:"Mind your own biscuits, and life will be gravy"
  },
  {
    user_id: 3,
    birth_day:  1990-04-18,
    linkedin: "https://www.linkedin.com/in/brian-williams-7890a0156/",
    github: "https://github.com/briancwilliams18/",
    favorite_hobby: "Volleyball, Video games, Dungeons and dragons",
    favorite_movies_or_tv_shows: " Haikyu!!, Forest Gump, Community",
    favorite_songs:"Gooey, Grow Back, 2young",
    favorite_quote: "True friends stab you in the front.- Oscar Wilde"
  },
  {
    user_id: 4,
    birth_day: 11-24-2001,
    linkedin: "https://www.linkedin.com/in/malachi-gamblin/",
    github: "https://github.com/malachigamblin",
    favorite_hobby: "watching basketball",
    favorite_movies_or_tv_shows: "breaking bad, the last of us, the office",
    favorite_songs: "Show Me How, Die For You, Glimpse of Us",
    favorite_quote:"If you're afraid to fail, then you're probably going to fail. - Kobe"
  },
  {
    user_id: 5,
    birth_day: 07-19-2002,
    linkedin: "https://www.linkedin.com/in/melena-grilliot-52a419273/",
    github: "https://github.com/melenagrilliot",
    favorite_hobby: "playing guitar",
    favorite_movies_or_tv_shows: "South Park, Daisy Jones and The Six, Dance Moms",
    favorite_songs:"Silver Springs, Tuesday's Gone, Groupie Love ",
    favorite_quote:"Null"
  }
] 


const seedBio = () => Bio.bulkCreate(bioData);

module.exports = seedBio;