var redux = require('redux');

console.log("Starting redux example");

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
}
var nextHobbyId = 1,
    nextMovieId = 1;

var reducer = (state = stateDefault, action) => {
  console.log('New Action', action);

  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [...state.hobbies, {
          id: nextHobbyId++,
          hobby: action.hobby
        }]
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
      }
    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
var unsubscribe = store.subscribe( () => {
  var state = store.getState();

  console.log('Name is: ', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('current state: ', store.getState());
});

var currentState = store.getState();

console.log('current state: ', currentState);

store.dispatch({
  type: "CHANGE_NAME",
  name: "Bobert"
});

store.dispatch({
  type: "ADD_HOBBY",
  hobby: "Running"
});

store.dispatch({
  type: "CHANGE_NAME",
  name: "Jobery"
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
