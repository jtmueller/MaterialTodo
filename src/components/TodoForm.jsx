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
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <input type="text" ref="text"
                  placeholder={this.props.placeholder || 'What needs to be done?'}
                  className="form-control" />
              </td>
              <td>
                <button type="submit" className="btn btn-default">Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
});

module.exports = TodoForm;
