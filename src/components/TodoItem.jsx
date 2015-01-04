/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var cx = require('react-classset');

var TodoItem = React.createClass({
  handleChange(e) {
    this.props.onCompletionChange(this.props.key, e.target.checked);
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
      </tr>
    );
  }
});

module.exports = TodoItem;
