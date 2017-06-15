import MyCheckbox from '../src/MyCheckbox';

import React from 'react';

import { mount, shallow } from 'enzyme';

class MyCheckboxRenderer {
  mount() {
    return mount(
      <MyCheckbox/>
    );
  }

  shallow() {
    return shallow(
      <MyCheckbox/>
    );
  }
}


describe('<MyCheckbox />', () => {
  it('can be checked', () => {
    const wrapper = new MyCheckboxRenderer().mount();
    console.log(wrapper.debug());
    //console.log(wrapper.html());
    //wrapper.find('input').simulate('click');

    //wrapper.find('input').simulate('blur');
    //wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('change');
    //wrapper.find('input').simulate('mouseup');
    //wrapper.find('input').simulate('mousedown');
    //wrapper.find('input').simulate('mouseleave');
    //wrapper.find('input').simulate('touchstart');
    //wrapper.find('input').simulate('touchend');
  });
});
