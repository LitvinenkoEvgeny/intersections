import React, {Component} from 'react';

import Header from '../Header/HeaderContainer';


/**
* App - main App component
* @extends Component
*/
export default class AppComponent extends Component {

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
      <Header title={'Intersections'} />
    );
  }
}
