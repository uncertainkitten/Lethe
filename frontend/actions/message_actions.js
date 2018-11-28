export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
import * as messageAPI from '../util/message_api_util';

export const receiveMessages = (messages) => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  };
};

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

export const fetchMessages = () => (dispatch) => {
  return messageAPI.getMessages().then(messages => dispatch(receiveMessages(messages)));
};

export const fetchMessage = (id) => (dispatch) => {
  return messageAPI.getMessages(id).then(message => dispatch(receiveMessage(message)));
};

export const createMessage = (message) => (dispatch) => {
  return messageAPI.postMessage(message).then(message => dispatch(receiveMessage(message)))
}