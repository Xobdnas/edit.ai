import test from 'ava';
import React from 'react';
import {render} from 'enzyme';

import Html from '_core/system/components/html';


test('Html component renders when content prop is passed in', t => {
  const wrapper = render(
    <Html content="Hello World" />
  );
  t.true(wrapper.text() == "Hello World");
});


test('Html component renders html when content prop contains html', t => {
  const content = '<div class="test another">test</div>';
  const wrapper = render(
    <Html content={content} />
  );

  // Making sure the div is a fully render div, not string.
  t.true(wrapper.find('.test').hasClass('another'));
});
