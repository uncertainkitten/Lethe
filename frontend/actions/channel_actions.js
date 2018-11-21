import * as channelAPI from '../util/channel_api_util';

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";

export const receiveChannel = (channel) => ({
  type: "RECEIVE_CHANNEL",
  channel
});

export const receiveChannels = (channels) => ({
  type: "RECEIVE_CHANNELS",
  channels
});

export const removeChannel = (channel) => ({
  type: "REMOVE_CHANNEL",
  channel
});

export const fetchChannels = (serverId) => dispatch => {
  return channelAPI.getChannels(serverId).then(channels => dispatch(receiveChannels(channels)));
}

export const fetchChannel = (channelId) => dispatch => {
  return channelAPI.getChannel(channelId).then(channel => dispatch(receiveChannel(channel)));
}

export const makeChannel = (serverId, channel) => dispatch => {
  return channelAPI.postChannel(serverId, channel).then(channel => dispatch(receiveChannel(channel)));
}

export const breakChannel = (serverId, channelId) => dispatch => {
  return channelAPI.deleteChannel(serverId, channelId).then(channel => dispatch(removeChannel(channel)));
}