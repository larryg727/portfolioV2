import React, { Component } from 'react'
import { Link } from 'gatsby'

class Navbar extends Component {
  state = {
    swipeComplete: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        swipeComplete: true,
      })
    }, 1000)
  }

  linkStyles = () => {
    const style = this.state.swipeComplete
      ? {
          color: '#505050',
        }
      : {
          color: '#ffffff',
        }
    return style
  }

  render() {
    console.log(this.linkStyles())
    return (
      <div className="nav">
        <div className="nav-links" style={this.linkStyles()}>
          <Link to="/" className="link" style={this.linkStyles()}>
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/portfolio" className="link">
            Portfolio
          </Link>
          <Link to="/skills" className="link">
            Skills
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar
