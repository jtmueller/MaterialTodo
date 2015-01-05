/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var cx = require('react-classset');

var TodoItem = React.createClass({
  getInitialState() {
    return {
      text: this.props.data.text,
      completed: !!this.props.data.completed,
      key: this.props.data.key
    };
  },

  handleChange(e) {
    this.props.onItemChange({
      key: this.state.key,
      completed: e.target.checked,
      text: this.state.text
    });
    this.setState({ completed: e.target.checked });
  },

  handleDelete(e) {
    this.props.onDelete(this.state.key);
  },

  render() {
    var classes = cx({
      todo: true,
      completed: this.state.completed
    });
    return (
      <tr>
        <td>
          <input id={'x' + this.state.key} type="checkbox"
            defaultChecked={this.state.completed}
            onChange={this.handleChange} />
        </td>
        <td>
          <label className={classes}
            htmlFor={'x' + this.state.key}>
            {this.state.text}
          </label>
        </td>
        <td>
          <button type="button" onClick={this.handleDelete}
            className="close" aria-label="Delete" title="Delete">
            <span aria-hidden="true">&times;</span>
          </button>
        </td>
      </tr>
    );
  }
});

module.exports = TodoItem;
