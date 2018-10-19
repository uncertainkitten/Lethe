import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {getChannels, getChannel, postChannel, deleteChannel} from './util/channel_api_util';

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
  window.getChannels = getChannels;
  window.getChannel = getChannel;
  window.postChannel = postChannel;
  window.deleteChannel = deleteChannel;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //END TESTS

  ReactDOM.render(<Root store={store}/>, root)
});