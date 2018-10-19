import {connect} from 'react-redux';
import Greeting from './greeting';
import {logout} from '../../actions/session_actions';
import {fetchServersByUser} from '../../actions/server_actions';
import {fetchChannels} from '../../actions/channel_actions';

const mapStateToProps = state => {
  let loggedIn;
  if (state.session.id) {
    loggedIn = true
  } else {
    loggedIn = false
  }
  return ({
    loggedIn: loggedIn,
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    currentServer: Object.values(state.entities.servers)[0],
    currentChannel: Object.values(state.entities.channels)[0]
  });
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchServersByUser: (userId) => dispatch(fetchServersByUser(userId)),
  fetchChannels: (serverId) => dispatch(fetchChannels(serverId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);