import * as InviteAPI from '../util/invite_api_util';

export const RECEIVE_INVITES = "RECEIVE_INVITES";
export const RECEIVE_INVITE = "RECEIVE_INVITE";

export const receiveInvites = (invites) => ({
  type: "RECEIVE_INVITES",
  invites
});

export const receiveInvite = (invite) => ({
  type: "RECEIVE_INVITE",
  invite
});

export const fetchInvites = () => dispatch => {
  return InviteAPI.getInvites().then(invites => dispatch(receiveInvites(invites)));
}

export const fetchInvite = (inviteId) => dispatch => {
  return InviteAPI.getInvite(inviteId).then(invite => dispatch(receiveInvite(invite)));
}

export const makeInvite = (serverId, invite) => dispatch => {
  return InviteAPI.postInvite(serverId, invite).then(invite => dispatch(receiveInvite(invite)));
}

export const useInvite = (inviteId) => dispatch => {
  return InviteAPI.patchInvite(inviteId).then(invite => dispatch(receiveInvite(invite)));
}