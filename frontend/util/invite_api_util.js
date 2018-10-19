export const getInvites = () => {
  return $.ajax({
    method: "GET",
    url: `api/invites`
  })
}

export const getInvite = (inviteId) => {
  return $.ajax({
    method: "GET",
    url: `api/invites/${inviteId}`
  })
}

export const postInvite = (serverId, invite) => {
  return $.ajax({
    method: "POST",
    url: `api/servers/${serverId}/invites`,
    data: {invite}
  })
}

export const patchInvite = (inviteId) => {
  return $.ajax({
    method: "PATCH",
    url: `api/invites/${inviteId}`
  })
}