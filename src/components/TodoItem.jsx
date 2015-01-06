/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var {Modal,ModalTrigger,Button,Glyphicon} = require('react-bootstrap');
var cx = require('react-classset');
var TodoActions = require('./TodoActions.js');

var DeleteConfirm = React.createClass({
  render() {
    return (
      <Modal {...this.props} title="Are you sure?" animation={true}>
        <div className="modal-body">
          <p>Are you sure you want to permanently delete the task <em>{this.props.itemname}</em>?</p>
        </div>
        <div className="modal-footer">
          <Button bsStyle="primary" onClick={this.props.onConfirm}>Yes</Button>
          <Button onClick={this.props.onRequestHide}>No</Button>
        </div>
      </Modal>
    );
  }
});

var TodoItem = React.createClass({
  
  handleChange(e) {
    TodoActions.update({
      key: this.props.item.key,
      completed: e.target.checked,
      text: this.props.item.text
    });
  },

  handleDelete(e) {
    TodoActions.remove(this.props.item.key);
  },

  render() {
    var classes = cx({
      todo: true,
      completed: this.props.item.completed
    });
    return (
      <tr>
        <td>
          <input id={'x' + this.props.item.key} type="checkbox"
            checked={this.props.item.completed}
            onChange={this.handleChange} />
        </td>
        <td>
          <label className={classes}
            htmlFor={'x' + this.props.item.key}>
            {this.props.item.text}
          </label>
        </td>
        <td>
          <ModalTrigger modal={<DeleteConfirm itemname={this.props.item.text} onConfirm={this.handleDelete} />}>
            <button className="close"><Glyphicon glyph="remove" /></button>
          </ModalTrigger>
        </td>
      </tr>
    );
  }
});

module.exports = TodoItem;
