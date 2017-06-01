var redux = require('redux');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

console.log("Starting redux example");

// subscribe to changes
var unsubscribe = store.subscribe( () => {
  var state = store.getState();

  document.getElementById('app').innerHTML = state.name;

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+state.map.url+'" target="_blank">View your location</a>';
  }
});

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Boberta'));
store.dispatch(actions.changeName('Frankinda'));
store.dispatch(actions.changeName('Brunhilda'));

store.dispatch(actions.addHobby('Sobbing quietly'));
store.dispatch(actions.addHobby('Sobbing Loudly'));
store.dispatch(actions.addHobby('Farting silently'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie('Goonies 2', 'Adventuretime'));
store.dispatch(actions.addMovie('Care Bears Funtime', 'Adventuretime'));
store.dispatch(actions.addMovie('Star Warriors', 'Fantasy Space'));

store.dispatch(actions.removeMovie(3));
