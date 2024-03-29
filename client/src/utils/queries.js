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
      sessions {
        _id
        targetName
        commonName
        sessionDate
        dsoCategory
        location
        moonPhase
        telescope
        camera
        mount
        rotation
        exposureCount
        duration
        filter
        image
      }
      targets {
        _id
        targetName
        commonName
        dsoCategory
        image
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

export const QUERY_CATEGORIES = gql`
  query getCategories {
    categories {
      _id
      categoryName
    }
  }
`;

export const QUERY_SESSIONS = gql`
  query getSessions {
    sessions {
      _id
      targetName
      commonName
      sessionDate
      dsoCategory
      location
      moonPhase
      telescope
      camera
      mount
      rotation
      exposureCount
      duration
      filter
      image
    }
  }
`;

export const QUERY_TARGETS = gql`
  query getTargets {
    targets {
      _id
      targetName
      commonName
      dsoCategory
      image
    }
  }
`;

export const QUERY_WEATHER = gql`
query getWeather($date: String!, $lat: String!, $lon: String) {
  weather(date: $date, lat: $lat, lon: $lon) {
    moonphase
    sunrise
    sunset
    cloudcover
    visibility
    precipprob
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
      sessions {
        _id
        targetName
        commonName
        sessionDate
        dsoCategory
        location
        moonPhase
        telescope
        camera
        mount
        rotation
        exposureCount
        duration
        filter
        image
      }
      targets {
        _id
        targetName
        commonName
        dsoCategory
        image
      }      
    }
  }
`;
