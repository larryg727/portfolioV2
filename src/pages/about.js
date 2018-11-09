import React, { Component } from 'react'
import Layout from '../components/layout'

class About extends Component {
  state = {
    swipeComplete: false,
  }

  renderAbout = () => <h1>About</h1>

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        swipeComplete: true,
      })
    }, 1000)
  }

  render() {
    return (
      <Layout>{this.state.swipeComplete ? this.renderAbout() : null}</Layout>
    )
  }
}

export default About
