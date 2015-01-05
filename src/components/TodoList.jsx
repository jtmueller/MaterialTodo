/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var TodoItem = require('./ToDoItem.jsx');

var TodoList = React.createClass({
  render() {
    var items = this.props.data.map(item =>
      <TodoItem key={item.key} completed={item.completed} text={item.text}
        onItemChange={this.props.onItemChange}
        onDelete={this.props.onDelete} />
    );

    return (
      <table className="table">
        <tbody>
          {items}
        </tbody>
      </table>
    );
  }
});

module.exports = TodoList;
