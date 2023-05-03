const seedBio = require('./bioData');
const seedComments  = require('./commentData');
const seedUser = require('./userData');



const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- USER SEEDED -----\n');
  await seedBio();
  console.log('\n----- BIO SEEDED -----\n');
  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
