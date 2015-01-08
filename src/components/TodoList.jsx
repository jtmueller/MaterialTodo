'use strict';

var React = require('react');
var _ = require('lodash');
var {Col, Row} = require('react-bootstrap');
var TodoItem = require('./ToDoItem.jsx');

var TodoList = React.createClass({
  chunk(collection, chunkSize) {
    var size = parseInt(chunkSize, 10);
    if (!collection || _.isNaN(size)) { return []; }
    return _.toArray(_.groupBy(collection, (iterator, index) => {
      return Math.floor(index / size)
    }));
  },

  renderGroup(group, i) {
    return (
      <Col key={i} lg={4}>
        { _.map(group, item => <TodoItem key={item.key} item={item} />) }
      </Col>
    );
  },

  render() {
    return (
      <Row>
        { _.map(this.chunk(this.props.data, 5), this.renderGroup) }
      </Row>
    );
  }
});

module.exports = TodoList;
