import {connect} from 'react-redux';
import Splash from './splash';
import {closeModal} from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps)=> {
  let loggedIn;
  if (state.session.id) {
    loggedIn = true
  } else {
    loggedIn = false
  }
  let mode = state.ui.mode.id;
  let currentServerId = ownProps.match.params.id
  return ({loggedIn, mode});
}

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);