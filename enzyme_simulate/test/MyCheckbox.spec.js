import MyCheckbox from '../src/MyCheckbox';

import React from 'react';

import { mount, shallow } from 'enzyme';

class MyCheckboxRenderer {
  mount() {
    return mount(
      <MyCheckbox/>
    );
  }
}


describe('<MyCheckbox />', () => {
  it('is OFF when not checked', () => {
    const wrapper = new MyCheckboxRenderer().mount();
    expect(wrapper.find('.checkbox__status').html()).to.match(/OFF/);
  });
  it('is ON when checked', () => {
    const wrapper = new MyCheckboxRenderer().mount();
    wrapper.find('input').simulate('change');
    expect(wrapper.find('.checkbox__status').html()).to.match(/ON/);
  });
});
