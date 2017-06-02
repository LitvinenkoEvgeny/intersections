import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


/**
* HeaderComponent - Description
* @extends Component
*/
export default class HeaderComponent extends Component {

  /**
   * constructor - HeaderComponent constructor
   *
   * @param {type} props react component props
   *
   */
  constructor(props) {
    super(props);
    this.state = {open: false};

    this.handleLeftIconButtonTap = this.handleLeftIconButtonTap.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  static get propTypes() {
    return {
        title: PropTypes.string.isRequired
    };
  }
  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }

  handleLeftIconButtonTap() {
    this.setState({open: true});
  }

  /**
   * render - Description
   *
   * @return {type} React.Component
   */
  render() {
    return(
      <div>
        <AppBar
          title={this.props.title}
          onLeftIconButtonTouchTap={this.handleLeftIconButtonTap}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})} >

            <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>

        </Drawer>
      </div>
    );
  }
}
