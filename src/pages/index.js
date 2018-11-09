import React, { Component } from 'react'
import Layout from '../components/layout'

class IndexPage extends Component {
  state = {
    swipeComplete: false,
  }

  renderIndex = () => <h1>Hello, I'm Larry.</h1>

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        swipeComplete: true,
      })
    }, 1000)
  }

  render() {
    return (
      <Layout>{this.state.swipeComplete ? this.renderIndex() : null}</Layout>
    )
  }
}

export default IndexPage
