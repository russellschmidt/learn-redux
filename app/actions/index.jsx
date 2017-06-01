var axios = require('axios');
// Name Reducer and Action Generators
// -----------------------

export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  };
};

// Hobbies Reducer and Action Generators
// -----------------------


export var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

export var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};

// Movies Reducer and Action Generators
// -----------------------


export var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  };
};

export var removeMovie = (id) => {
  return {
    type: "REMOVE_MOVIE",
    id
  };
};

// Map Reducer and Action Generators
// -----------------------


export var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
};

export var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
};

export var fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());

    axios.get('http://ipinfo.io').then(function (res) {
      var loc = res.data.loc;
      var baseUrl = "http://maps.google.com?q=";
      dispatch(completeLocationFetch(baseUrl + loc));
    });
  }
};
