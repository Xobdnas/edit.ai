import React, { Component } from 'react';

import Menu from '_plugins/menu/components/menu';


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
