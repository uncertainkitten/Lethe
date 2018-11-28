export const getMessages = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/messages/`
  });
};

export const getMessage = (messageId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/messages/${messageId}`
  });
};

export const postMessage = (message) => {
  return $.ajax({
    url: `/api/messages/`,
    method: 'POST',
    data: {message}
  });
};

export const patchMessage = (message) => {
  return $.ajax({
    url: `/api/messages/${message.id}`,
    method: 'PATCH',
    data: {message}
  });
};

export const deleteMessage = (messageId) => {
  return $.ajax({
    url: `/api/messages/${messageId}`,
    method: 'DELETE'
  });
};