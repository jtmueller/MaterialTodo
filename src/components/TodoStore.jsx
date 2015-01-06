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
        this.todos = [];
        this.firebaseRef = new Firebase("https://hrbo-todo.firebaseio.com/todos/");
        this.listenToFirebase(this.firebaseRef, this.firebaseChange);
        this.listenToMany(TodoActions);
    },

    firebaseChange(todos) {
        var data = [];
        todos.forEach(x => { data.push(x.val()); });
        this.trigger(data);
        this.todos = data;
        //console.log('firebaseChange', data, todos.val());
    },

    add(item) {
        //console.log('add', item);
        var newItem = this.firebaseRef.push();
        item.key = newItem.key();
        this.todos.push(item);
        this.trigger(this.todos);
        newItem.set(item);
    },

    remove(key) {
        //console.log('delete', key);
        this.todos = _.filter(this.todos, x => x.key !== key);
        this.trigger(this.todos);
        this.firebaseRef
            .child(key)
            .remove();
    },

    update(item) {
        //console.log('update', item);
        var oldItem = _.find(this.todos, x => x.key === item.key);
        _.extend(oldItem, item);
        this.trigger(this.todos);
        this.firebaseRef
            .child(item.key)
            .update(item);
    }
});

module.exports = TodoStore;
