import MyComponent from '../src/MyComponent';

import React from 'react';
import {shallow} from 'enzyme';

class ComponentRenderer {
  shallow() {
    return shallow(<MyComponent/>);
  }
}

describe('<MyComponent />', () => {
  it('renders', () => {
    const wrapper = new ComponentRenderer().shallow();
    console.log(wrapper.debug());
    wrapper.find('div').simulate('click');
  });
});
