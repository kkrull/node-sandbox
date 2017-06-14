import PropTypes from 'prop-types';
import React, { Component } from 'react';

class MyComponent extends Component {
  onClick = () => {
		console.log('CLICKED');
	};
	
  render() {
    return (
      <div onclick={this.onClick}>Test</div>
    );
  }
}

export default MyComponent;
