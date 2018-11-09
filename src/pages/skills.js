import React, { Component } from 'react'
import Layout from '../components/layout'

class Skills extends Component {
  state = {
    swipeComplete: false,
  }

  renderSkills = () => <h1>Skills</h1>

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        swipeComplete: true,
      })
    }, 1000)
  }

  render() {
    return (
      <Layout>{this.state.swipeComplete ? this.renderSkills() : null}</Layout>
    )
  }
}

export default Skills
