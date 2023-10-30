const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    locations: [Location]
    instruments: [Instrument]
    filters: [Filter]
    sessions: [Session]
  }

  type Location {
    _id: ID
    place: String
    lat: String
    lon: String
    altitude: String
    bortle: String
  }

  type Instrument {
    _id: ID
    telescope: String
    camera: String
    mount: String
  }

  type Filter {
    _id: ID
    filterName: String
    filterType: String
  }

  type Category {
    _id: ID
    categoryName: String
  }

  type Session {
    _id: ID
    targetName: String
    commonName: String
    sessionDate : String
    dsoCategory: String
    location: String
    moonPhase: String
    telescope: String
    camera: String
    mount: String
    rotation: String
    exposureCount: String
    duration: String
    filter: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Weather {
    moonphase: Float
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    locations: [Location]
    location(place: String!): Location
    instruments: [Instrument]
    filters: [Filter]
    categories: [Category]
    sessions: [Session]
    session(targetName: String!): Session
    weather(date: String, lat: String, lon: String): Weather
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFilter(filterName: String!, filterType: String!): Filter
    addInstrument(telescope: String!, camera: String!, mount: String!): Instrument
    addLocation(place: String!, lat: String!, lon: String!, altitude: String, bortle: String): Location
    addSession(targetName: String!, commonName: String, sessionDate: String!, dsoCategory: String!, location: String, moonPhase: String, telescope: String, camera: String, mount: String, rotation: String, exposureCount: String, duration: String, filter: String, image: String): Session
  }
`;

module.exports = typeDefs;
