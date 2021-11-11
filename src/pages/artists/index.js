import * as React from 'react'
import Layout from '../../components/layout'
import {Link, graphql} from 'gatsby'
import { node } from 'prop-types'

const ArtistsPage = ({data: {allWpArtist: {edges}}}) => {
  return (
    <Layout pageTitle="Artists of DDB Agency">
        {edges.map((item) => {
            const artist = item.node.artistMeta
            const slug = item.node.slug
            return <Link to={`/artists/${slug}`}>
                <p key={item.node.id}>{artist.firstName} {artist.lastName}</p>
                </Link>
        })}
    </Layout>
  )
}

export const query = graphql`
    query {
        allWpArtist {
            edges {
                node {
                    id
                    artistMeta {
                        firstName
                        lastName
                        artistName
                    }
                    id
                    slug
                }
            }
        }
    }
`


export default ArtistsPage