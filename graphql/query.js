import { gql } from "@apollo/client"

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        id
        name
        image
        artwork
      }
    }
  }
`

export const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      base_experience
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      sprites {
        front_default
      }
      stats {
        base_stat
        stat {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`
