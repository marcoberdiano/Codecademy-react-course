import React from 'react';
import { Button } from './Button';



class Talker extends React.Component {
  handleClick () {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  render() {
    return <Button onClick = {this.handleClick}/>;
  }
}

export default Talker;