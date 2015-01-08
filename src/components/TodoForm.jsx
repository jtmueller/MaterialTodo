'use strict';

var React = require('react');
var TodoActions = require('./TodoActions.js');
var {Input} = require('./react-material.jsx');

var TodoForm = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    var text = this.refs.text.getValue().trim();
    if (!text)
      return;

    TodoActions.add({ text: text });
    this.refs.text.clearValue();
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input type="text" ref="text" floatingLabel
          placeholder={this.props.placeholder || 'What needs to be done?'} />
      </form>
    );
  }
});

module.exports = TodoForm;
