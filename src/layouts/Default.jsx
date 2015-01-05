/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var {Link, RouteHandler} = require('react-router');
var Navbar = require('../components/Navbar.jsx');

var DefaultLayout = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = DefaultLayout;
