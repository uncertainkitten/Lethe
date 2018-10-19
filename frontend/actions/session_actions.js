import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = (currentUser) => ({
  type: "RECEIVE_CURRENT_USER",
  currentUser
});

export const receiveSessionErrors = (errors) => ({
  type: "RECEIVE_SESSION_ERRORS",
  errors
});

export const logoutCurrentUser = () => ({
  type: "LOGOUT_CURRENT_USER"
});

export const signup = (user) => dispatch => {
  return SessionAPI.postUser(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => dispatch(receiveSessionErrors(err.responseJSON)));
};

export const login = (user) => dispatch => {
  return SessionAPI.postSession(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => dispatch(receiveSessionErrors(err.responseJSON)));
};

export const logout = () => dispatch => {
  return SessionAPI.deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
    .fail(err => dispatch(receiveSessionErrors(err.responseJSON)));
};