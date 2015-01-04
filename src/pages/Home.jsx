/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var ToDoApp = require('../components/TodoApp.jsx');

var HomePage = React.createClass({
  render() {
    return (
      <div className="container">
          <ToDoApp />
      </div>
    );
  }
});

module.exports = HomePage;
