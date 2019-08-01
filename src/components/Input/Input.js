import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * @property {string} className is used for input class
   * @property {string} type is used for input type
   * @property {object} styles is used for inline styles
   * @property {string} value is used for input value
   * @property {func} onChange is used for overriding input function
   */
  className: PropTypes.string,
  type: PropTypes.string,
  styles: PropTypes.object,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired

}

const defaultProps = {
  className: "",
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
