import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class MyNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          VolF
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/introduce" className="nav-link">
                Introduce
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/notice" className="nav-link">
                Notice
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/story" className="nav-link">
                Story
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/faq" className="nav-link">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
