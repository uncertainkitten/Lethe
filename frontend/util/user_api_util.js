export const getUser = (userId) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}`
  })
}

export const deleteUser = (userId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/users/${userId}`
  })
}