/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var {Modal,ModalTrigger,Button,Glyphicon} = require('react-bootstrap');
var cx = require('react-classset');

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
            checked={this.props.completed}
            onChange={this.handleChange} />
        </td>
        <td>
          <label className={classes}
            htmlFor={'x' + this.props.key}>
            {this.props.text}
          </label>
        </td>
        <td>
          <ModalTrigger modal={<DeleteConfirm itemname={this.props.text} onConfirm={this.handleDelete} />}>
            <button className="close"><Glyphicon glyph="remove" /></button>
          </ModalTrigger>
        </td>
      </tr>
    );
  }
});

module.exports = TodoItem;
