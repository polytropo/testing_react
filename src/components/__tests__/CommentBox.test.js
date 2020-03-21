import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(
  <Root>
    <CommentBox />
  </Root>);
});

afterEach(() => {
  wrapped.unmount();
})

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);

});

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapped.update();
  });
  
  it('has a text area that user can type in', () => {
    // wrapped.find('textarea').simulate('change', {
    //   target: { value: 'new comment' }
    // });
    // Updating the state is async in react - need to force the update here bcs of it
    // wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when form is submitted, text area gets empty', () => {
    // Already testing the code below in the test above
    // expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});

// it('has a button', () => {
//   expect(wrapped.find('button').length).toEqual(1);
// });
