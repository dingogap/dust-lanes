import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FILTER = gql`
  mutation addFilter($filterName: String!, $filterType: String!) {
    addFilter(filterName: $filterName, filterType: $filterType) {
      _id
      filterName
      filterType
    }
  }
`;

export const ADD_INSTRUMENT = gql`
  mutation addInstrument(
    $telescope: String!
    $camera: String!
    $mount: String!
  ) {
    addInstrument(telescope: $telescope, camera: $camera, mount: $mount) {
      _id
      telescope
      camera
      mount
    }
  }
`;

export const ADD_LOCATION = gql`
  mutation addLocation(
    $place: String!
    $lat: String!
    $lon: String!
    $altitude: String
    $bortle: String
  ) {
    addLocation(
      place: $place
      lat: $lat
      lon: $lon
      altitude: $altitude
      bortle: $bortle
    ) {
      _id
      place
      lat
      lon
      altitude
      bortle
    }
  }
`;

export const ADD_SESSION = gql`
  mutation addSession($targetName: String!, $commonName: String, $sessionDate: String!, $dsoCategory: String!, $location: String!, $moonPhase: String, $telescope: String!, $camera: String!, $mount: String!, $rotation: String, $exposureCount: String!, $duration: String!, $filter: String) {
    addSession(targetName: $targetName, commonName: $commonName, sessionDate: $sessionDate, dsoCategory: $dsoCategory, location: $location, moonPhase: $moonPhase, telescope: $telescope, camera: $camera, mount: $mount, rotation: $rotation, exposureCount: $exposureCount, duration: $duration, filter: $filter) {
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
    }
  }
`;

