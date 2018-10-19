import * as ServerAPI from '../util/server_api_util';
import * as UserAPI from '../util/user_api_util';

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const RECEIVE_USER_SERVERS = "RECEIVE_USER_SERVERS";

export const receiveServers = (servers) => ({
  type: "RECEIVE_SERVERS",
  servers
})

export const receiveServer = (server) => ({
  type: "RECEIVE_SERVER",
  server
})

export const removeServer = (serverId) => ({
  type: "REMOVE_SERVER",
  serverId
})

export const receiveUserServers = (servers) => ({
  type: "RECEIVE_USER_SERVERS",
  servers
})

export const fetchServers = () => dispatch => {
  return ServerAPI.getServers().then(servers => dispatch(receiveServers(servers)));
}

export const fetchServer = (serverId) => dispatch => {
  return ServerAPI.getServer(serverId).then(server => dispatch(receiveServer(server)));
}

export const createServer = (server) => dispatch => {
  return ServerAPI.postServer(server).then(server => dispatch(receiveServer(server)));
}

export const updateServer = (server) => dispatch => {
  return ServerAPI.patchServer(server).then(server => dispatch(receiveServer(server)));
}

export const breakServer = (serverId) => dispatch => {
  return ServerAPI.deleteServer(serverId).then(() => dispatch(removeServer(serverId)));
}

export const fetchServersByUser = (userId) => dispatch => {
  return UserAPI.getUser(userId).then((payload) => dispatch(receiveUserServers(payload.servers)));
}