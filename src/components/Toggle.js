import React from 'react';
import '../css/Button.css';
const green = '#39D1B4';
const yellow = '#FFD712';

export class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {color: green};
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(){
    const newColor = this.state.color === green ? yellow : green;
    this.setState({color: newColor});
  }
  render() {
    return (
      <div style={{background: this.state.color, padding:"30vh"}}>
        <h1>
          <button id="button" onClick={this.changeColor}>Change color</button>
        </h1>
      </div>
    );
  }
}