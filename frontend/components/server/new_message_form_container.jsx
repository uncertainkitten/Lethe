import {connect} from 'react-redux';
import NewMessageForm from './new_message_form';
import { withRouter } from 'react-router-dom';
import {createMessage} from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    channel: state.entities.channels[ownProps.match.params.channelId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newMessage: (message) => dispatch(createMessage(message))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewMessageForm));