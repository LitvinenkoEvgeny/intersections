import Routes from './router'; // eslint-disable-line no-unused-vars
import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

import Utils from './Utils/index';

Utils.injectTapEvents();

ReactDOM.render(<Routes />, document.querySelector('#app'));
