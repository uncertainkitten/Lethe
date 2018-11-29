import React from 'react';
import {withRouter} from 'react-router-dom';

class UserActivity extends React.Component {
  render(){
    return(
      <div className="emptyMessage">
        Please Select A Server
      </div>
    );
  }
}

export default withRouter(UserActivity);