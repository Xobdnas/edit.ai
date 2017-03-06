import React, { Component } from 'react';
import { Dropdown, Image } from 'semantic-ui-react';
import Menu from '../../../plugins/menu/components/Menu';
import '../app.scss';

export default class App extends Component {
  // TODO: Move this into "User settings,management component".
  options = [
    { key: 'user', text: 'Account', icon: 'user' },
    { key: 'settings', text: 'Settings', icon: 'settings' },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
  ];

  trigger = (
    <span>
      <Image avatar src="https://avatars0.githubusercontent.com/u/118016?v=3&s=128" /> Eric J. Duran
    </span>
  );

  render() {
    return (
      <div>
        <header className="header">
          <Menu />
          <div className="container-fluid">
            <div className="row">
              <div className="col push-md-10">
                <Dropdown trigger={this.trigger} options={this.options} pointing='top left' icon={null} />
              </div>
            </div>
          </div>
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
