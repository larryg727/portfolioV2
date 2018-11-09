import React, { Component } from 'react'

class Swiper extends Component {
  state = {
    isSwiping: false,
  }

  componentDidMount() {
    this.setState({ isSwiping: true })
    setTimeout(() => {
      this.setState({ isSwiping: false })
    }, 1000)
  }



  getStyle = () => {
    const style = this.state.isSwiping
      ? {
          width: '100vw',
        }
      : {
          width: '0',
        }
    return style
  }

  render() {
    return <div className="swiper" style={this.getStyle()} />
  }
}

export default Swiper
