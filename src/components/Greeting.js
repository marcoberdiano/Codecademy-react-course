import React from 'react';


class Greeting extends React.Component {
  render() {
    return <h1>Hi therem, {this.props.firstName}!</h1>;
  }
}

export default Greeting;