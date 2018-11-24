import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchChannels, makeChannel, breakChannel} from './actions/channel_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTS
  window.fetchChannels = fetchChannels;
  window.makeChannel = makeChannel;
  window.breakChannel = breakChannel;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //END TESTS

  ReactDOM.render(
      <Root store={store}/>, root
  );
});