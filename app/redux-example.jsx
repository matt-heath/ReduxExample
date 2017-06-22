var redux = require('redux');

console.log('Starting redux example');

var action = require('./actions/index');
var store = require('./store/configureStore').configure();

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url +'" target=_blank >View Your Location</a>'
  }
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(action.fetchLocation());

store.dispatch(action.changeName('Matthew'));

// unsubscribe();
store.dispatch(action.addHobby('Running'));
store.dispatch(action.addHobby('Walking'));
store.dispatch(action.removeHobby(2));

store.dispatch(action.changeName('Rachael'));

store.dispatch(action.addMovie('Taken', 'Action'));
store.dispatch(action.addMovie('Skyfall', 'Action'));
store.dispatch(action.removeMovie(2));
