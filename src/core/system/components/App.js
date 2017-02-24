import React, { Component } from 'react';
import Menu from '../../../plugins/menu/components/Menu';

export default class App extends Component {
  render() {
    return (
      <div id="outer-container">
        <Menu />
        <div id="page-wrap">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};
