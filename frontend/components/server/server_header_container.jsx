import {connect} from 'react-redux';
import ServerHeader from './server_header';
import {fetchServer} from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  server: state.entities.servers[ownProps.match.params.serverId],
  currentServer: Object.values(state.entities.servers)[0]
});

const mapDispatchToProps = dispatch => ({
  fetchServer: (serverId) => dispatch(fetchServer(serverId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerHeader);