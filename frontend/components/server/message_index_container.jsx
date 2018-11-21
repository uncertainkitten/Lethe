import { connect } from 'react-redux';
import {fetchChannel} from '../../actions/channel_actions';
import { openModal, closeModal } from '../../actions/ui_actions';
import MessageIndex from './message_index';
import { getChannelMessages } from '../../reducers/selectors';
import {fetchMessages, fetchMessage} from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
  channelId: ownProps.match.params.channelId,
  mode: state.ui.mode.id,
  currentUser: state.entities.users[state.session.id],
  currentServerId: ownProps.match.params.id,
  channelMessages: getChannelMessages(state, ownProps.match.params.channelId)
});

const mapDispatchToProps = dispatch => ({
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
  fetchMessages: () => dispatch(fetchMessages()),
  fetchMessage: (messageId) => dispatch(fetchMessage(messageId)),
  openModal: (channelId) => dispatch(openModal(channelId)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);

