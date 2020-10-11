import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    person: file(relativePath: { eq: "bgriner-network.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = ({ showPerson }) => {
  const { person } = useStaticQuery(query)
  return (
    <header className="hero">
      {showPerson && (
        <Image fluid={person.childImageSharp.fluid} className="hero-person" />
      )}
    </header>
  )
}

export default Hero
