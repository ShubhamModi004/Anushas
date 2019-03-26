import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Importing components
import About from '../About/About';

const PortfolioPage = () => (
    <Layout>
        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
        <About />
    </Layout>
)

export default PortfolioPage;
