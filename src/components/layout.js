import React from "react"
import "./layout.css"
import Menu from "./menu"
import Sidebar from "./sidebar"
import { useStaticQuery, graphql } from "gatsby"

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      topics: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              categories
              tags
            }
          }
        }
      }
    }
  `)
  return (
    <div className="app">
      <Menu title={data.site.siteMetadata.title} />
      <div className="main">
        <div className="content">{children}</div>
        <div className="sidebar">
          {/* <Sidebar edges={data.topics.edges} /> */}
        </div>
      </div>
    </div>

    // <div className="app">
    //   <Menu title={data.site.siteMetadata.title} />
    //   <div className="main">
    //     <div className="content">{children}</div>
    //     <div className="sidebar">
    //       <Sidebar />
    //     </div>
    //   </div>
    // </div>
  )
}
