/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

var routes = (
  <Route name="app" path="/" handler={require('./layouts/Default.jsx')}>
    <Route name="home" path="/" handler={require('./pages/Home.jsx')} />
    <Route name="privacy" handler={require('./pages/Privacy.jsx')} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler/>, document.body);
});
