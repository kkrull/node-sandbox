import Checkbox from 'material-ui/Checkbox';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';

class MyCheckbox extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }

  onCheck = () => {
    //console.log('CHECK');
    this.setState({ checked: true });
  };

  render() {
    //console.log('RENDER', this.state);

    const muiTheme = getMuiTheme({});
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Checkbox onCheck={this.onCheck}/>
          <div className="checkbox__status">
            { this.state.checked ? 'ON' : 'OFF' }
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MyCheckbox;
