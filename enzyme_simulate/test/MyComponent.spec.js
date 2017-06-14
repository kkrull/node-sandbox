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
    it('is OFF before clicking', () => {
      const wrapper = new ComponentRenderer().shallow();
      expect(wrapper.html()).to.match(/OFF/);
    });
    it('is ON after clicking', () => {
      const wrapper = new ComponentRenderer().shallow();
      wrapper.find('div').simulate('click');
      expect(wrapper.html()).to.match(/ON/);
    });
  });

  context('with full DOM rendering', () => {
    it('is OFF before clicking', () => {
      const wrapper = new ComponentRenderer().mount();
      expect(wrapper.html()).to.match(/OFF/);
    });
    it('is ON after clicking', () => {
      const wrapper = new ComponentRenderer().mount();
      wrapper.find('div').simulate('click');
      expect(wrapper.html()).to.match(/ON/);
    });
  });
});
