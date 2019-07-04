import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default BaseComponent => {
  const displayName = BaseComponent.displayName

  return class WithAnimation extends Component {
    static displayName = `withAnimation(${displayName})`

    static contextTypes = BaseComponent.contextTypes
    static propTypes = {
      onClose: PropTypes.func,
      onAnimationEnd: PropTypes.func
    }
    static defaultProps = {
      onClose: () => {},
      onAnimationEnd: () => {}
    }

    state = {
      closing: false
    }

    _onAnimationEnd = ev => {
      const {onAnimationEnd, onClose} = this.props

      onAnimationEnd()
      if (!this.state.closing) return
      this.setState({closing: false}, () => onClose())
    }

    _onClose = () => {
      this.setState({closing: true})
    }

    render() {
      const {onClose, ...rest} = this.props
      return (
        <BaseComponent
          {...rest}
          onClose={this._onClose}
          isClosing={this.state.closing}
          onAnimationEnd={this._onAnimationEnd}
        />
      )
    }
  }
}
