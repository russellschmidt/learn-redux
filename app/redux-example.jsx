var redux = require('redux');

console.log("Starting redux example");

// Name Reducer and Action Generators
// -----------------------
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  };
};

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  };
};

// Hobbies Reducer and Action Generators
// -----------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
      case 'REMOVE_HOBBY':
        return state.filter((hobby) => hobby.id !== action.id);
      default:
        return state
  };
};

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};

// Movies Reducer and Action Generators
// -----------------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  };
};

var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  };
};

var removeMovie = (id) => {
  return {
    type: "REMOVE_MOVIE",
    id
  };
};

// Combined Reducers
// -----------------------
var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
var unsubscribe = store.subscribe( () => {
  var state = store.getState();

  document.getElementById('app').innerHTML = state.name;
});

store.dispatch(changeName('Boberta'));
store.dispatch(changeName('Frankinda'));
store.dispatch(changeName('Brunhilda'));

store.dispatch(addHobby('Sobbing quietly'));
store.dispatch(addHobby('Sobbing Loudly'));
store.dispatch(addHobby('Farting silently'));

store.dispatch(removeHobby(2));

store.dispatch(addMovie('Goonies 2', 'Adventuretime'));
store.dispatch(addMovie('Care Bears Funtime', 'Adventuretime'));
store.dispatch(addMovie('Star Warriors', 'Fantasy Space'));

store.dispatch(removeMovie(3));
