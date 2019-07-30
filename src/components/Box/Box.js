import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Box.scss'

class Box extends Component {

  render() {
    const className = this.props.className ? '' : ' '+this.props.className
    return (
      <div className={"box"+className}>
        {this.props.children}
      </div>
    );
  }
}

Box.propTypes = {
    /**
     * @property {string} className is to add className to the Box
     */
    className: PropTypes.string,
    /**
     * @property {element} children are placed inside the Box div
     */
    children: PropTypes.element
}

Box.defaultProps = {
    className: ""
}

export default Box;
