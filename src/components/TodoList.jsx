/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var {Table} = require('react-bootstrap');
var TodoItem = require('./ToDoItem.jsx');

var TodoList = React.createClass({
  render() {
    var items = this.props.data.map(item =>
      <TodoItem key={item.key} data={item}
        onItemChange={this.props.onItemChange}
        onDelete={this.props.onDelete} />
    );

    return (
      <Table>
        <tbody>
          {items}
        </tbody>
      </Table>
    );
  }
});

module.exports = TodoList;
