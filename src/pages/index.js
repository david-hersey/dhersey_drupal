import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        allNodeArticle {
          edges {
            node {
              title
              body {
                value
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Welcome</h1>
        <div className="row">
        {data.allNodeArticle.edges.map(edge => (
          <>
          
            <div className="col-md-4">
              <h2>{edge.node.title}</h2>
              <span dangerouslySetInnerHTML={{ __html: edge.node.body.value }} />
            </div>

          </>
        ))}
        </div>
      </Layout>
    )}
  />
)

export default IndexPage
