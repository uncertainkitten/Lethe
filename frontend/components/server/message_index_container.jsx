import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/ui_actions';
import MessageIndex from './message_index';
import { getChannelMessages, getUserForMessage } from '../../reducers/selectors';
import {fetchMessages, fetchMessage} from '../../actions/message_actions';
import {memberList} from '../../actions/membership_actions';


const mapStateToProps = (state, ownProps) => ({
  channelId: ownProps.match.params.channelId,
  serverId: ownProps.match.params.serverId,
  mode: state.ui.mode.id,
  channelMessages: getChannelMessages(state, ownProps.match.params.channelId),
  getUserForMessage: getUserForMessage,
  members: state.entities.members,
  messages: state.entities.messages
});

const mapDispatchToProps = dispatch => ({
  // fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
  fetchMessages: () => dispatch(fetchMessages()),
  fetchMessage: (messageId) => dispatch(fetchMessage(messageId)),
  openModal: (channelId) => dispatch(openModal(channelId)),
  closeModal: () => dispatch(closeModal()),
  memberList: (serverId) => dispatch(memberList(serverId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);

