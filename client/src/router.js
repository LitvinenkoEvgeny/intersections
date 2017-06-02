import React from 'react'; // eslint-disable-line no-unused-vars
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import App from './Components/App/AppContainer';


/**
 * AppRouter - app routing pure component
 *
 * @return {type} React.Component
 */
const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  );
};

export default AppRouter;
