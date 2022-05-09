import React from 'react';
import '../css/Button.css'

export class Button extends React.Component {
  render() {
    return (
      <div id="button-container">
        <button id="button" onClick={this.props.onClick}>
            {this.props.text}
        </button>
      </div>
    );
  }
}

Button.defaultProps = {text:'Click me!'}