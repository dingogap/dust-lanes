const db = require('../config/connection');
const { User, Location, Instrument, Filter, Category } = require('../models');
const userSeeds = require('./userSeeds.json');
const locationData = require('./locationData.json');
const instrumentData = require('./instrumentData.json');
const filterData = require('./filterData.json');
const categoryData = require('./categoryData.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('User', 'users');
    await cleanDB('Location', 'locations');
    await cleanDB('Instrument', 'instruments');
    await cleanDB('Filter', 'filters');
    await cleanDB('Session', 'sessions');
    await cleanDB('Category', 'categories');

    const filters = await Filter.create(filterData);

    await User.create(userSeeds.map(user => {

      return {
        ...user,
        filters: [
          filters[Math.floor(Math.random() * filters.length)]._id 
        ]
      }
    }));
    await Location.create(locationData);
    await Instrument.create(instrumentData);
    await user.create(userData);
    await Category.create(categoryData);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
