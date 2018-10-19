import {connect} from 'react-redux';
import {getMembershipId} from '../../reducers/selectors';
import ServerIndexItem from './server_index_item';

const mapStateToProps = (state, ownProps) => ({
  membershipId: getMembershipId(state, ownProps.server.id, ownProps.currentUser.id)
});

export default connect(mapStateToProps, null)(ServerIndexItem);