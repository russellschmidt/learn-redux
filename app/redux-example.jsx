var redux = require('redux');

console.log("Starting redux example");

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var nextHobbyId = 1,
    nextMovieId = 1;

// var oldreducer = (state = stateDefault, action) => {
//   switch(action.type) {
//     case 'CHANGE_NAME':
//       return {
//         ...state,
//         name: action.name
//       };
//     case 'ADD_HOBBY':
//       return {
//         ...state,
//         hobbies: [...state.hobbies, {
//           id: nextHobbyId++,
//           hobby: action.hobby
//         }]
//       };
//     case 'ADD_MOVIE':
//       return {
//         ...state,
//         movies: [
//           ...state.movies,
//           {
//             id: nextMovieId++,
//             title: action.title,
//             genre: action.genre
//           }
//         ]
//       };
//     case 'REMOVE_HOBBY':
//       return {
//         ...state,
//         hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
//       };
//     case 'REMOVE_MOVIE':
//       return {
//         ...state,
//         movies: state.movies.filter((movie) => movie.id !== action.id)
//       }
//     default:
//       return state;
//   }
// };

var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  };
};

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

store.dispatch({
  type: "CHANGE_NAME",
  name: "Bobert"
});

store.dispatch({
  type: "ADD_HOBBY",
  hobby: "Running"
});

store.dispatch({
  type: "ADD_HOBBY",
  hobby: "Walking"
});

store.dispatch({
  type: "ADD_HOBBY",
  hobby: "Crying"
});

store.dispatch({
  type: "CHANGE_NAME",
  name: "Fredjeffy"
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Goonies',
  genre: 'Adventure'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Robocop',
  genre: 'Science Fiction'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Event Horizon',
  genre: 'Science Fiction Horror'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});
