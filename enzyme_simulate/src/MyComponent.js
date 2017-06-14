import React, { Component } from 'react';

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  onClick = () => {
		//console.log('CLICK');
		this.setState({ clicked: true });
	};
	
  render() {
    //console.log('RENDER', this.state);
    return (
      <div onClick={this.onClick}>
        { this.state.clicked ? 'ON' : 'OFF' }
      </div>
    );
  }
}

export default MyComponent;
