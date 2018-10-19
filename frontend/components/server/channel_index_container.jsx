import { connect } from 'react-redux';
import { makeChannel, breakChannel, fetchChannel, fetchChannels } from '../../actions/channel_actions';
import { openModal, closeModal } from '../../actions/ui_actions';
import ChannelIndex from './channel_index';

const mapStateToProps = (state, ownProps) => ({
  channels: Object.values(state.entities.channels),
  mode: state.ui.mode.id,
  currentUser: state.entities.users[state.session.id],
  serverId: ownProps.match.params.serverId
})

const mapDispatchToProps = dispatch => ({
  fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
  makeChannel: (serverId, channel) => dispatch(makeChannel(serverId, channel)),
  breakChannel: (serverId, channelId) => dispatch(breakChannel(serverId, channelId)),
  openModal: (channelId) => dispatch(openModal(channelId)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);

