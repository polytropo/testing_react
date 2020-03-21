import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
// By default it looks for index.js in reducers folder if we write 'reducers'

import App from 'components/App';

ReactDOM.render(
  <Root>
    <App/>
  </Root>,
  document.querySelector('#root')
);
