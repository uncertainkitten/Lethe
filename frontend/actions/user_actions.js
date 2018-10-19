import * as UserAPI from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";

export const receiveUser = (payload) => ({
  type: "RECEIVE_USER",
  user: payload.user
})

export const removeUser = (userId) => ({
  type: "REMOVE_USER",
  userId
})

export const fetchUser = (userId) => dispatch => {
  return UserAPI.getUser(userId).then(payload => dispatch(receiveUser(payload)));
}

export const deleteAccount = userId => dispatch => {
  return UserAPI.deleteUser(userId).then(() => dispatch(removeUser(userId)));
}