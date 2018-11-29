import { connect } from 'react-redux';
import { memberList} from '../../actions/membership_actions';
import { openModal, closeModal } from '../../actions/ui_actions';
import { fetchServer } from '../../actions/server_actions';
import UserIndex from './user_index';

const mapStateToProps = (state, ownProps) => ({
  users: Object.values(state.entities.members),
  mode: state.ui.mode.id,
  currentUser: state.entities.users[state.session.id],
  currentServerId: ownProps.match.params.serverId
});

const mapDispatchToProps = dispatch => ({
  memberList: (serverId) => dispatch(memberList(serverId)),
  openModal: (channelId) => dispatch(openModal(channelId)),
  fetchServer: (serverId) => dispatch(fetchServer(serverId)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);
