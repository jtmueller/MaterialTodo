/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var cx = require('react-classset');

var TodoItem = React.createClass({
  handleChange(e) {
    this.props.onItemChange({
      key: this.props.key,
      completed: e.target.checked,
      text: this.props.text
    });
  },

  handleDelete(e) {
    this.props.onDelete(this.props.key);
  },

  render() {
    var classes = cx({
      todo: true,
      completed: this.props.completed
    });
    return (
      <tr>
        <td>
          <input id={'x' + this.props.key} type="checkbox"
            defaultChecked={this.props.completed}
            onChange={this.handleChange} />
        </td>
        <td>
          <label className={classes}
            htmlFor={'x' + this.props.key}>
            {this.props.text}
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
