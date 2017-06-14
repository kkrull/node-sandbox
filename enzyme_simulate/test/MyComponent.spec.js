import MyComponent from '../src/MyComponent';

import React from 'react';
import { mount } from 'enzyme';

class ComponentRenderer {
  mount() {
    return mount(<MyComponent/>);
  }
}

describe('<MyComponent />', () => {
  it('renders', () => {
    const wrapper = new ComponentRenderer().mount();
    console.log(wrapper.debug());
    wrapper.find('div').simulate('click');
  });
});
