import React from 'react';
import {slide as ReactBurgerMenu} from 'react-burger-menu';
import {Link} from 'react-router';

import '../style.scss';

export default class Menu extends React.Component {

  render() {
    return (
      <ReactBurgerMenu noOverlay left width={ 200 } radiumConfig={{ userAgent: 'all' }}>
        <Link to="/login" className="nav-link" activeClassName="active" >Login</Link>
        <Link to="/reset" className="nav-link">Reset</Link>
        <Link to="/create" className="nav-link" activeClassName="active" >Article</Link>
        <Link to="/schema/add" className="nav-link" activeClassName="active" >Add new Schema</Link>
      </ReactBurgerMenu>
    );
  }
}
