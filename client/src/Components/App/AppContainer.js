import React, {Component} from 'react';

import AppComponent from './AppComponent';


/**
* App - main App container
* @extends Component
*/
export default class AppContainer extends Component {

  /**
   * constructor - Description
   *
   * @param {array} props react component props
   *
   */
  constructor(...props) {
    super(...props);
  }

  /**
   * render - Description
   *
   * @return {react.Component}
   */
  render() {
    return(
      <AppComponent />
    );
  }
}
