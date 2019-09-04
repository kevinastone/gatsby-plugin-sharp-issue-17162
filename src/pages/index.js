import { graphql } from "gatsby"
import React from "react"

export default () => <div>Hello world!</div>

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "fruits.png" }) {
      childImageSharp {
        fluid(
          quality: 80
          maxWidth: 1920
          duotone: { highlight: "#ffcc5c", shadow: "#ff6f69", opacity: 50 }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
