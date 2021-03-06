/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var {Link} = require('react-router');

var Navbar = React.createClass({
  render() {
    return (
      <header className="navbar-top">
        <div className="container">
          <Link className="navbar-brand row" to="home">
            <img src="http://reactjs.kriasoft.com/images/logo-small.png"
                width="38" height="38" alt="React" />
          </Link>
        </div>
      </header>
    );
  }
});

module.exports = Navbar;
