import {connect} from 'react-redux';
import ServerIndex from './server_index';
import {fetchServersByUser, fetchServer, createServer, breakServer} from '../../actions/server_actions';
import {memberList, joinServer, leaveServer} from '../../actions/membership_actions';
import {openModal, closeModal} from '../../actions/ui_actions';
import {makeChannel} from '../../actions/channel_actions';

const mapStateToProps = state => ({
  servers: Object.values(state.entities.servers),
  currentUser: state.entities.users[state.session.id],
  mode: state.ui.mode.id,
  members: state.entities.members
})

const mapDispatchToProps = dispatch => ({
  fetchServersByUser: (userId) => dispatch(fetchServersByUser(userId)),
  fetchServer: (serverId) => dispatch(fetchServer(serverId)),
  joinServer: (serverId) => dispatch(joinServer(serverId)),
  leaveServer: (membershipId) => dispatch(leaveServer(membershipId)),
  openModal: (serverId) => dispatch(openModal(serverId)),
  closeModal: () => dispatch(closeModal()),
  createServer: (server) => dispatch(createServer(server)),
  memberList: (serverId) => dispatch(memberList(serverId)),
  breakServer: (serverId) => dispatch(breakServer(serverId)),
  makeChannel: (serverId, channel) => dispatch(makeChannel(serverId, channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);

