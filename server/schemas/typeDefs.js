const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    locations: [Location]
    instruments: [Instrument]
    filters: [Filter]
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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    locations: [Location]
    location(place: String!): Location
    instruments: [Instrument]
    filters: [Filter]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFilter(filterName: String!, filterType: String!): Filter
    addInstrument(telescope: String!, camera: String!, mount: String!): Instrument
    addLocation(place: String!, lat: String!, lon: String!, altitude: String, bortle: String): Location
  }
`;

module.exports = typeDefs;
