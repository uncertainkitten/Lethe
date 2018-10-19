export const getChannels = (serverId) => {
  return $.ajax({
    method: "GET",
    url: `api/servers/${serverId}/channels`
  })
}

export const postChannel = (serverId, channel) => {
  return $.ajax({
    method: "POST",
    url: `api/servers/${serverId}/channels`,
    data: {channel}
  })
}

export const getChannel = (channelId) => {
  return $.ajax({
    method: "GET",
    url: `api/channels/${channelId}`
  })
}

export const deleteChannel = (serverId, channelId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/servers/${serverId}/channels/${channelId}`
  })
}