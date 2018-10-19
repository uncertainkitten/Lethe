export const getMemberships = (serverId) => {
  return $.ajax({
    method: "GET",
    url: `api/servers/${serverId}/memberships`
  })
}

export const postMembership = (serverId) => {
  return $.ajax({
    method: "POST",
    url: `api/servers/${serverId}/memberships`
  })
}

export const deleteMembership = (membershipId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/memberships/${membershipId}`
  })
}