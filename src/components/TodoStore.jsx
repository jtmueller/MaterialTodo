'use strict';
var Firebase = require('firebase');
var Reflux = require('reflux');
var _ = require('lodash');
var TodoActions = require('./TodoActions.js');

Reflux.ListenerMethods.listenToFirebase =
    function(ref, callback) {
        var self = this;
        ref.on("value", function() {
            callback.apply(self, arguments);
        });
    };


var TodoStore = Reflux.createStore({
    init() {
        this.firebaseRef = new Firebase("https://hrbo-todo.firebaseio.com/todos/");
        this.listenToFirebase(this.firebaseRef, this.firebaseChange);
        this.listenToMany(TodoActions);
    },

    firebaseChange(todos) {
        var data = [];
        todos.forEach(x => { data.push(x.val()); });
        this.trigger(data);
        //console.log('firebaseChange', data, todos.val());
    },

    add(item) {
        //console.log('add', item);
        var newItem = this.firebaseRef.push();
        item.key = newItem.key();
        newItem.set(item);
    },

    remove(key) {
        //console.log('delete', key);
        this.firebaseRef
            .child(key)
            .remove();
    },

    update(item) {
        //console.log('update', item);
        this.firebaseRef
            .child(item.key)
            .update(item);
    }
});

module.exports = TodoStore;
