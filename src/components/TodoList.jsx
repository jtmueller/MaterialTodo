/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var _ = require('lodash');
var {Table} = require('react-bootstrap');
var TodoItem = require('./ToDoItem.jsx');

var TodoList = React.createClass({
  render() {
    var items = _.map(this.props.data, item =>
      <TodoItem key={item.key} item={item} />
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
