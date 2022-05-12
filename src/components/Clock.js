import React from 'react';

const css = {
    fontSize:150, 
    display:'flex',
    justifyContent: 'center',
    backgroundColor: '#FCFCFC'
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    
}

  render() {
    return (
        <div>
            <div style={css}>
                {this.state.date.toLocaleTimeString()}
            </div>
        </div>
        );
  }
  componentDidMount() {
    // Paste your code here.
    const oneSecond = 1000;
    this.intervalID=setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
  componentWillUnmount(){
    clearInterval(this.intervalID);
  }
}

export default Clock;