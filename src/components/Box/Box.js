import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Box.scss'

class Box extends Component {

  render() {
    return (
      <div className={`box ${this.props.className}`} style={this.props.styles}>
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
     * @property {object} styles is a styles object that passes inline styles to the component
     */
    styles: PropTypes.object,
    /**
     * @property {element} children are placed inside the Box div
     */
    children: PropTypes.element
}

Box.defaultProps = {
    className: "",
    styles: {}
}

export default Box;
