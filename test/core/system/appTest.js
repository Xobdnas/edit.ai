import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';

import App from '_core/system/components/app';


test('App component renders children when passed in', t => {
  const wrapper = shallow(
    <App>
      <div className="unique"/>
    </App>
  );
  t.true(wrapper.contains(<div className="unique"/>));
});
