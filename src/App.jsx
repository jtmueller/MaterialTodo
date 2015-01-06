/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Router = require('react-router');
var {Route, Redirect, RouteHandler} = Router;
var TodoApp = require('./components/TodoApp.jsx');

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

var App = React.createClass({
  render() {
    return (
      <div className="container">
        <RouteHandler />
      </div>
    );
  }
});

var routes = (
  <Route name="app" handler={App}>
    <Route name="github" path="/MaterialTodo/" handler={TodoApp} />
    <Route name="home" path="/" handler={TodoApp} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler/>, document.body);
});
