import React, {Component} from 'react';

import ContentComponent from './ContentComponent';

/**
* ContentContainer - content container
* @extends Component
*/
export default class ContentContainer extends Component {

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
      <ContentComponent />
    );
  }
}
