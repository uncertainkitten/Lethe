import {connect} from 'react-redux';
import InviteItem from './invite_item';
import {fetchInvites, fetchInvite, makeInvite, useInvite} from '../../actions/invite_actions';
import {getInvite, getServerInvites} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  invites: getServerInvites(state, ownProps.server.id),
  toggleInvite: ownProps.toggleInvite,
  invite: getInvite(state, ownProps.server.id)
});

const mapDispatchToProps = dispatch => ({
  fetchInvites: () => dispatch(fetchInvites()),
  fetchInvite: (inviteId) => dispatch(fetchInvite(inviteId)),
  makeInvite: (serverId, invite) => dispatch(makeInvite(serverId, invite)),
  useInvite: (inviteId) => dispatch(useInvite(inviteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(InviteItem);