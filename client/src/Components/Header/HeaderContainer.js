import React, {Component} from 'react';
import PropTypes from 'prop-types';

import HeaderComponent from './HeaderComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


/**
 * HeaderContainer - Header Container
 * @extends Component
 */
export default class HeaderContainer extends Component {

  /**
   * constructor - HeaderContainer constructor function
   *
   * @param {type} props react props
   *
   */
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
        title: PropTypes.string.isRequired
    };
  }

  /**
   * render - Description
   *
   * @return {type} React.Component
   */
  render() {
    return(
      <MuiThemeProvider>
        <HeaderComponent title={this.props.title} />
      </MuiThemeProvider>
    );
  }
}
