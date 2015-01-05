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
          <ModalTrigger modal={<DeleteConfirm itemname={this.state.text} onConfirm={this.handleDelete} />}>
            <button className="close"><Glyphicon glyph="remove" /></button>
          </ModalTrigger>
        </td>
      </tr>
    );
  }
});

module.exports = TodoItem;
