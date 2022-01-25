import { useState } from "react"
import { useEffect } from "react"
import { PER_PAGE, VARIABLES as variables } from "../graphql/constants"

/**
 * Hook to use browser's event scroll
 * @param {Boolean} loading The one of conditions which must be fulfilled to run the callback
 * @param {Function} callback The callback function to execute once reach the bottom of the viewport
 */

const useInfiniteScroll = (pokemons, loading, callback) => {
  let loadCount = 0
  let perPage = pokemons.length

  const scrollListener = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement

    // Execute callback function when the conditions are met
    if (!loading && scrollTop + clientHeight >= scrollHeight - 50) {
      callback({
        variables: {
          ...variables,
          offset: loadCount === 0 ? perPage : (perPage += PER_PAGE),
        },
      })
      loadCount++
    }
  }

  useEffect(() => {
    // Add `scroll` event listener
    window.addEventListener("scroll", scrollListener)
    // console.log(perPage)

    // Clean the even when unmounted
    return () => window.removeEventListener("scroll", scrollListener)
  }, [])
}

export default useInfiniteScroll
