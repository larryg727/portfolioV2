import React, { Component } from 'react'
import Layout from '../components/layout'

class Portfolio extends Component {
  state = {
    swipeComplete: false,
  }

  renderPortfolio = () => <h1>Portfolio</h1>

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        swipeComplete: true,
      })
    }, 1000)
  }

  render() {
    return (
      <Layout>
        {this.state.swipeComplete ? this.renderPortfolio() : null}
      </Layout>
    )
  }
}

export default Portfolio
