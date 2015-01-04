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

  handleCompletionChange(key, checked) {
    this.setState({
      data: this.state.data.map(item => {
        if (item.key === key) {
          return {
            text: item.text,
            key: item.key,
            completed: checked
          }
        }
        return item;
      })
    });
  },

  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <TodoList data={this.state.data}
          onCompletionChange={this.handleCompletionChange} />
        <TodoForm onItemAdd={this.handleItemAdd} />
      </div>
    );
  }
});

module.exports = TodoApp;
