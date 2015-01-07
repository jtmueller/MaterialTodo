/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var {Col,Modal,ModalTrigger,Button,Glyphicon} = require('react-bootstrap');
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

  handleClick(e) {
    e.stopPropagation();
    TodoActions.update({
      key: this.props.item.key,
      completed: !this.props.item.completed,
      text: this.props.item.text
    });
  },

  handleDelete(e) {
    TodoActions.remove(this.props.item.key);
  },

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <Col xs={2}>
            <div className="checkbox">
              <label>
                <input id={'x' + this.props.item.key} type="checkbox"
                  checked={this.props.item.completed}
                  onChange={this.handleClick} />
              </label>
            </div>
          </Col>
          <Col xs={8}>
            <label htmlFor={'x' + this.props.item.key}
              className={ cx({
                todo: true,
                completed: this.props.item.completed,
                'list-group-item-text': true
              }) }>
              {this.props.item.text}
            </label>
          </Col>
          <Col xs={2}>
            <ModalTrigger modal={<DeleteConfirm itemname={this.props.item.text} onConfirm={this.handleDelete} />}>
              <div className="icon-close"><i className="mdi-content-clear close"></i></div>
            </ModalTrigger>
          </Col>
        </div>
      </div>
    );
  }
});

module.exports = TodoItem;
