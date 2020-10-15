import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"


export default ({ data }) => {
    const indexData = data.nodePage
    return (
      <Layout>
        <div>
          <h1>{ indexData.title }</h1>
          <div dangerouslySetInnerHTML={{ __html: indexData.body.value }}></div>
        </div>
      </Layout>
    )
  }

  export const query = graphql`
  query($id: String!) {
    nodePage(id: { eq: $id }) {
      title
      body {
        value
      }
    }
  }
`