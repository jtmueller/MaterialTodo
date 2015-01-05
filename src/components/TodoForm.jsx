/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var {Input, Button, Table} = require('react-bootstrap');

var TodoForm = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    var text = this.refs.text.getValue().trim();
    if (!text)
      return;

    this.props.onItemAdd({ text: text });
    this.refs.text.getInputDOMNode().value = '';
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input type="text" ref="text" cssClass="col-md-12"
          placeholder={this.props.placeholder || 'What needs to be done?'}
          buttonAfter={<Button type="submit" bsStyle="primary">Save</Button>} />
      </form>
    );
  }
});

module.exports = TodoForm;
