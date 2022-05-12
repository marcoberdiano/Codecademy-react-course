import React from 'react';

export class BestApp extends React.Component {
	// constructor method begins here:
  constructor(props){
    super(props);
    this.state = { 
        title: 'Best App',
        hungry: false
    };
  }
	
  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}