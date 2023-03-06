import React from 'react';

class Error extends React.Component {
  render() {
    return <div className="error">{this.props.formError}</div>;
  }
}

export default Error;
