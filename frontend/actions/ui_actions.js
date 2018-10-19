export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (serverId) => ({
  type: "OPEN_MODAL",
  mode: serverId
})

export const closeModal = () => ({
  type: "CLOSE_MODAL",
})