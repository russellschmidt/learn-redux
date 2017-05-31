var redux = require('redux');
console.log('Redux Todo Example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

// for Redux devTools extension, add 2nd optional argument
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
var unsubscribeSearchText = store.subscribe( () => {
  var state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
})

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'twerk'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'doggy'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'doodles'
});
