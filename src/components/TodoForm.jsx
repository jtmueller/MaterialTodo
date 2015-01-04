/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var TodoForm = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    var text = this.refs.text.getDOMNode().value.trim();
    if (!text)
      return;

    this.props.onItemAdd({ text: text });
    this.refs.text.getDOMNode().value = '';
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea ref="text"
          placeholder="Add a new task!"
          className="form-control"></textarea>

        <button type="submit" className="btn btn-default">Save</button>
      </form>
    );
  }
});

module.exports = TodoForm;
