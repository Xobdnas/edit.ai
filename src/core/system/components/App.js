import React, { Component } from 'react';
import Menu from '../../../plugins/menu/components/Menu';
import '../app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="">
        <header>
          <Menu />
        </header>
        <div id="outer-container">
          <div id="page-wrap">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};
