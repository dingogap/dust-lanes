const db = require('../config/connection');
const { User, Location, Instrument, Filter } = require('../models');
const userSeeds = require('./userSeeds.json');
const locationData = require('./locationData.json');
const instrumentData = require('./instrumentData.json');
const filterData = require('./filterData.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('User', 'users');
    await cleanDB('Location', 'locations');
    await cleanDB('Instrument', 'instruments');
    await cleanDB('Filter', 'filters');

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
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
