import { useState } from "react"
import { useEffect } from "react"
import { PER_PAGE, VARIABLES as variables } from "../graphql/constants"

/**
 * Hook to use browser's event scroll
 * @param {Boolean} loading The one of conditions which must be fulfilled to run the callback
 * @param {Function} callback The callback function to execute once reach the bottom of the viewport
 */

const useInfiniteScroll = (pokemons, loading, callback) => {
  let firstLoad = true
  let perPage = pokemons.length - PER_PAGE

  const scrollListener = () => {
    // Execute callback function when the conditions are met
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      callback({
        variables: {
          ...variables,
          offset: firstLoad === true ? PER_PAGE : (perPage += PER_PAGE),
        },
      })
      firstLoad === true ? (firstLoad = false) : null
    }
  }

  useEffect(() => {
    // Add `scroll` event listener
    window.addEventListener("scroll", scrollListener)

    // Clean the even when unmounted
    return () => window.removeEventListener("scroll", scrollListener)
  }, [])
}

export default useInfiniteScroll
