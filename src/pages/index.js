import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Importing components
import Home from '../Home/Home';
import Loader from '../Globals/Loader';

class IndexPage extends Component {
  state = {
    loading : true
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 500);
      
  }

  renderContent = () => {
    if (!this.state.loading) {
      return (
        <Layout>
          <SEO title="Home" keywords={[`Anushas`, `Fashion Designers In Goa`, `Best Fashion Designer`]} />
          <Home />
        </Layout>
      )
    } else {
      return (
        <Loader />
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default IndexPage;
