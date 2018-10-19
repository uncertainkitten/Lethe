import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let loggedIn;
  if (state.session.id) {
    loggedIn = true
  } else {
    loggedIn = false
  }
  return ({
    loggedIn: loggedIn,
    errors: state.errors.session,
    formType: 'signup'
  });
}

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);