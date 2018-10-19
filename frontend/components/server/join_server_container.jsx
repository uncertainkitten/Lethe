import { connect } from 'react-redux';
import JoinServerForm from './join_server_form';
import {useInvite, fetchInvites} from '../../actions/invite_actions';
import {closeModal} from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
  invites: state.entities.invites,
  mode: state.ui.mode
});

const mapDispatchToProps = dispatch => ({
  useInvite: (inviteId) => dispatch(useInvite(inviteId)),
  fetchInvites: () => dispatch(fetchInvites()),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinServerForm);