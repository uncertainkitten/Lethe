import { connect } from 'react-redux';
import {fetchChannel} from '../../actions/channel_actions';
import { openModal, closeModal } from '../../actions/ui_actions';
import MessageIndex from './message_index';

const mapStateToProps = (state, ownProps) => ({
  channelId: ownProps.match.params.channelId,
  mode: state.ui.mode.id,
  currentUser: state.entities.users[state.session.id],
  currentServerId: ownProps.match.params.id
});

const mapDispatchToProps = dispatch => ({
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
  openModal: (channelId) => dispatch(openModal(channelId)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);

