'use strict';

var React = require('react');
var _ = require('lodash');

var Input = React.createClass({
  getInitialState() {
    return { isEmpty: !(this.props.value || this.props.defaultValue) };
  },

  handleChange(e) {
    this.setState({
      isEmpty: !e.target.value || e.target.value.length === 0
    });
  },

  clearValue() {
    this.refs.inputField.getDOMNode().value = '';
    this.setState({ isEmpty: true });
  },

  getValue() {
    return this.refs.inputField.getDOMNode().value;
  },

  createInput(props) {
    switch (props.type) {
      case 'textarea':
        return <textarea {...props} ref="inputField" onChange={this.handleChange}>{props.children}</textarea>;
      case 'select':
        return <select {...props} ref="inputField">{props.children}</select>;
      case 'file':
        // TODO: file support isn't quite ready. Selected filename does not appear
        // anywhere. Custom sub-component?
        props = _.omit(props, ['className', 'type', 'placeholder']);
        return [
            <input type="text" key="ft" readonly className="form-control" />,
            <input type="file"  key="fu" ref="inputField" multiple {...props} />,
            <div key="fl" className="floating-label">{'Browse...'}</div>
        ];
      default:
        return <input {...props} ref="inputField" onChange={this.handleChange} />;
    }
  },

  render() {
    var classes = (this.props.className || '').split(' ');
    var wrapperClasses = ['form-control-wrapper'];
    var afterTags = [];
    var excludedProps = [];

    // add floating label if required
    if (this.props.floatingLabel && this.props.placeholder) {
      afterTags.push(<div className="floating-label" key={0}>{this.props.placeholder}</div>);
      excludedProps.push('placeholder');
      classes = classes.filter(c => c !== 'floating-label');
    }

    if (this.props.hint) {
      var hint = this.props.hint;
      excludedProps.push('hint');
      afterTags.push(<div className="hint" key={1}>{hint}</div>);
    }

    if (this.state.isEmpty) {
      classes.push('empty');
    }

    if (this.props.type === 'file') {
      wrapperClasses.push('fileinput');
    }

    classes.push('form-control');
    var childProps = _.omit(this.props, excludedProps);
    childProps.className = _.uniq(classes).join(' ');

    return (
      <div className="form-group">
        <div className={wrapperClasses.join(' ')}>
          { this.createInput(childProps) }
          <span className="material-input" />
          { afterTags }
        </div>
      </div>
    );
  }
});

var Checkbox = React.createClass({
  render() {
    return (
      <div className="checkbox">
        <label>
          <input type="checkbox" {...this.props} />
          <span className="ripple" />
          <span className="check" />
        </label>
      </div>
    );
  }
});

var Radio = React.createClass({
  render() {
    return (
      <div className="radio">
        <label>
          <input type="radio" {...this.props} />
          <span className="circle" />
          <span className="check" />
        </label>
      </div>
    );
  }
});

var ToggleButton = React.createClass({
  render() {
    return (
      <div className="togglebutton">
        <label>
          <input type="checkbox" {...this.props} />
          <span className="toggle" />
        </label>
      </div>
    );
  }
});

module.exports = {
  Checkbox: Checkbox,
  Radio: Radio,
  ToggleButton: ToggleButton,
  Input: Input
};
