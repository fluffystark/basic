import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /** @property {string} className is used for input class */
  className: PropTypes.string,

  /** @property {string} type is used for input type */
  type: PropTypes.string,

  /** @property {string} placeholder is used for input placeholder */
  placeholder: PropTypes.string,

  /** @property {object} styles is used for inline styles */
  styles: PropTypes.object,

  /** @property {string} value is used for input value */
  value: PropTypes.string.isRequired,
  
  /** @property {func} onChange is used for overriding input function */
  onChange: PropTypes.func.isRequired

}

const defaultProps = {
  className: "",
  placeholder: "",
  type: "text",
  styles: {},
}

class Input extends Component {

  handleChange = e => {
    e.preventDefault()
    this.props.onChange(e)
  }

  render() {
    return (
      <input
        className={this.props.className}
        styles={this.props.styles}
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.props.value}
        type={this.props.type}
        onChange={this.props.onChange}
      />
    );
  }
}

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input;
