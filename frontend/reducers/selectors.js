export const getMembershipId = (state, serverId, userId) => {
  const allServerMemberships = Object.values(state.entities.members)
    .filter(membership => membership.server_id === serverId && membership.user_id === userId);
  if (allServerMemberships[0]) {
    return allServerMemberships[0].id;
  } else {
    return null;
  }
}

export const getServerInvites = (state, serverId) => {
  const allServerInvites = Object.values(state.entities.invites).filter(invite => invite.server_id === serverId)
  return allServerInvites;
 }

export const getInvite = (state, serverId) => {
  const allServerInvites = Object.values(state.entities.invites).filter(invite => invite.server_id === serverId)
  const inviteIndex = allServerInvites.length - 1
  return allServerInvites[inviteIndex];
}

export const getChannelMessages = ({entities}, channelId) => {
  return Object.values(entities.messages).filter(message => message.channel_id.toString() === channelId.toString());
};

export const getUserForMessage = (members, userId) => {
  let userObj = Object.values(members).filter(member => member.user_id.toString() === userId.toString());
  return userObj[0].user
}