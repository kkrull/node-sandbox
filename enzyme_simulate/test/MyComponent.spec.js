import MyComponent from '../src/MyComponent';

import React from 'react';
import { mount, shallow } from 'enzyme';

class ComponentRenderer {
  mount() {
    return mount(<MyComponent/>);
  }

  shallow() {
    return shallow(<MyComponent/>);
  }
}

describe('<MyComponent />', () => {
  context('with shallow rendering', () => {
    it('simulates click events', () => {
      const wrapper = new ComponentRenderer().shallow();

      wrapper.find('div').simulate('click');
      //wrapper.simulate('click');
    });
  });

  context('with full DOM rendering', () => {
    it.skip('simulates click events', () => {
      const wrapper = new ComponentRenderer().mount();
      wrapper.find('div').simulate('click');
    });
  });
});
