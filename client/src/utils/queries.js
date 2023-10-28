import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      locations {
        _id
        place
        lat
        lon
        altitude
        bortle
      }
      instruments {
        _id
        telescope
        camera
        mount
      }
      filters {
        _id
        filterName
        filterType
      }
    }
  }
`;

export const QUERY_FILTERS = gql`
  query getFilters {
    filters {
      _id
      filterName
      filterType
    }
  }
`;

export const QUERY_INSTRUMENTS = gql`
  query getInstruments {
    instruments {
      _id
      telescope
      camera
      mount
    }
  }
`;

export const QUERY_LOCATIONS = gql`
  query getLocations {
    locations {
      _id
      place
      lat
      lon
      altitude
      bortle
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      locations {
        _id
        place
        lat
        lon
        altitude
        bortle
      }
      instruments {
        _id
        telescope
        camera
        mount
      }
      filters {
        _id
        filterName
        filterType
      }
    }
  }
`;
