import {connect} from 'react-redux';
import Nitro from './Nitro';

const mapStateToProps = state => ({
  user: state.currentUser
});

export default connect(mapStateToProps, null)(Nitro);