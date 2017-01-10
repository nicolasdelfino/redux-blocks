import React from 'react'

class Button extends React.Component {
  render () {
    return <button onClick={this.props.clickHandler}>{this.props.text}</button>
  }
}

Button.propTypes = {
  text             : React.PropTypes.string.isRequired,
  clickHandler     : React.PropTypes.func.isRequired
}

export default Button
