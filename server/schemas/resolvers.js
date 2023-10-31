const {
  User,
  Location,
  Instrument,
  Filter,
  Category,
  Session,
  Target,
} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const getWeather = require('../utils/getWeather');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({})
        .populate('locations')
        .populate('instruments')
        .populate('filters')
        .populate('sessions')
        .populate('targets');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .populate('locations')
        .populate('instruments')
        .populate('filters')
        .populate('sessions')
        .populate('targets');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate('locations')
          .populate('instruments')
          .populate('filters')
          .populate('sessions')
          .populate('targets');
      }
      throw AuthenticationError;
    },
    locations: async () => {
      return Location.find();
    },
    location: async (parent, { place }) => {
      return Location.findOne({ place });
    },
    instruments: async () => {
      return Instrument.find();
    },

    filters: async () => {
      return Filter.find();
    },

    categories: async () => {
      return Category.find();
    },
    sessions: async () => {
      return Session.find();
    },
    session: async (parent, { targetName }) => {
      return Session.findOne({ targetName });
    },
    targets: async () => {
      return Target.find();
    },
    target: async (parent, { targetName }) => {
      return Target.findOne({ targetName });
    },
    weather: async (parent, { date, lat, lon }) => {
      const results = await getWeather(date, lat, lon);
      console.log(results);
      return results.days[0];
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    addFilter: async (parent, { filterName, filterType }, context) => {
      if (context.user) {
        const filter = await Filter.create({
          filterName,
          filterType,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { filters: filter._id } }
        );

        return filter;
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },

    addInstrument: async (parent, { telescope, camera, mount }, context) => {
      if (context.user) {
        const instrument = await Instrument.create({
          telescope,
          camera,
          mount,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { instruments: instrument._id } }
        );

        return instrument;
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },

    addLocation: async (
      parent,
      { place, lat, lon, altitude, bortle },
      context
    ) => {
      if (context.user) {
        const location = await Location.create({
          place,
          lat,
          lon,
          altitude,
          bortle,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { locations: location._id } }
        );

        return location;
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },

    addSession: async (
      parent,
      {
        targetName,
        commonName,
        sessionDate,
        dsoCategory,
        location,
        moonPhase,
        telescope,
        camera,
        mount,
        rotation,
        exposureCount,
        duration,
        filter,
        image,
      },
      context
    ) => {
      if (context.user) {
        const session = await Session.create({
          targetName,
          commonName,
          sessionDate,
          dsoCategory,
          location,
          moonPhase,
          telescope,
          camera,
          mount,
          rotation,
          exposureCount,
          duration,
          filter,
          image,
        });
        return target;
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },

    addTarget: async (
      parent,
      { targetName, commonName, dsoCategory, image },
      context
    ) => {
      if (context.user) {
        const target = await Target.create({
          targetName,
          commonName,
          dsoCategory,
          image,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { targets: target._id } }
        );

        return target;
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
