const { User } = require('../models');

const userData =[
  {
    name: "Nelson Foster",
    email: "moxxy@gmail.com",
    password: "burger7474"
  },
  {
    name: "Tiffany England",
    email: "englandvivial@gmail.com",
    password: "osubootcamp1"
  },
  {
    name: "Melena Grilliot",
    email: "melenagrilliot@gmail.com",
    password: "Melenag123"
  },
  {
    name: "Malachi Gamblin",
    email: "malachi.gamblin@gmail.com",
    password: "test1234"
  },
  {
    name: "Brian Williams",
    email: "briancwilliams18@gmail.com",
    password: "macandcheeseXYZ%"
  }
] 


const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

