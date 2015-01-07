/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Reflux = require('reflux');
var {Grid, Row, Col} = require('react-bootstrap');

var TodoActions = require('./TodoActions.js');
var TodoStore = require('./TodoStore.jsx');

var TodoList = require('./TodoList.jsx');
var TodoForm = require('./TodoForm.jsx');

var TodoApp = React.createClass({
  mixins: [Reflux.connect(TodoStore, 'data')],

  getInitialState() {
    return {
      data: []
    };
  },

  render() {
    return (
      <Grid className="todoApp">
        <Row>
          <Col mdOffset={4} md={4}>
            <TodoForm />
          </Col>
        </Row>
        <TodoList data={this.state.data} />
      </Grid>
    );
  }
});

module.exports = TodoApp;
