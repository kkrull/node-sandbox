import Checkbox from 'material-ui/Checkbox';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';

class MyCheckbox extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onCheck = () => {
    console.log('CHECK');
  };

  render() {
    console.log('RENDER', this.state);

    const muiTheme = getMuiTheme({});
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Checkbox onCheck={this.onCheck} />
      </MuiThemeProvider>
    );
  }
}

export default MyCheckbox;
