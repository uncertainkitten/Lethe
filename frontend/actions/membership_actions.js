import * as MembershipAPI from '../util/membership_api_util';

export const RECEIVE_MEMBERSHIPS = "RECEIVE_MEMBERSHIPS";
export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP";

export const receiveMemberships = (memberships) => ({
  type: "RECEIVE_MEMBERSHIPS",
  memberships
})

export const receiveMembership = (membership) => ({
  type: "RECEIVE_MEMBERSHIP",
  membership
})

export const removeMembership = (membership) => ({
  type: "REMOVE_MEMBERSHIP",
  membership
})

export const memberList = (serverId) => dispatch => {
  return MembershipAPI.getMemberships(serverId).then(memberships => dispatch(receiveMemberships(memberships)));
}

export const joinServer = (serverId) => dispatch => {
  return MembershipAPI.postMembership(serverId).then(membership => dispatch(receiveMembership(membership)));
}

export const leaveServer = (membershipId) => dispatch => {
  return MembershipAPI.deleteMembership(membershipId).then((membership) => dispatch(removeMembership(membership)));
}