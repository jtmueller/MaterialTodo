'use strict';

var Reflux = require('reflux');

var TodoActions = Reflux.createActions([
    'add',
    'remove',
    'update'
]);

module.exports = TodoActions;
