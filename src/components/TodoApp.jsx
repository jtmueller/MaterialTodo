/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var TodoList = require('./TodoList.jsx');
var TodoForm = require('./TodoForm.jsx');

var TodoApp = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var firebaseRef = new Firebase("https://hrbo-todo.firebaseio.com/todos/");
    this.bindAsArray(firebaseRef.limitToLast(25), "data");
  },

  getInitialState() {
    return {
      data: []
    };
  },

  handleItemAdd(item) {
    var newItem = this.firebaseRefs["data"].push();
    newItem.set({
      key: newItem.key(),
      text: item.text
    });
  },

  handleItemChange(updatedItem) {
    this.firebaseRefs["data"]
      .child(updatedItem.key)
      .update(updatedItem);
  },

  handleDelete(key) {
    this.firebaseRefs["data"]
      .child(key)
      .remove();
  },

  render() {
    return (
      <div className="todoApp col-md-offset-4 col-md-4">
        <TodoList data={this.state.data}
          onItemChange={this.handleItemChange}
          onDelete={this.handleDelete} />
        <TodoForm onItemAdd={this.handleItemAdd} />
      </div>
    );
  }
});

module.exports = TodoApp;
