/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var TodoList = require('./TodoList.jsx');
var TodoForm = require('./TodoForm.jsx');

var TodoApp = React.createClass({
  getInitialState() {
    return {
      data: [
          { key:0, text: 'Hello World', completed:true },
          { key:1, text: 'Not done yet...' },
          { key:2, text: 'Render from data!', completed:true }
      ]
    };
  },

  handleItemAdd(item) {
    item.key = this.state.data.length;
    var newData = this.state.data.concat(item);

    this.setState({
      data: newData
    });
  },

  handleItemChange(updatedItem) {
    this.setState({
      data: this.state.data.map(item => {
        if (item.key === updatedItem.key) {
          return updatedItem;
        }
        return item;
      })
    });
  },

  handleDelete(key) {
    this.setState({
      data: this.state.data.filter(item => item.key !== key)
    });
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
