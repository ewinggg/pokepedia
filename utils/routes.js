import Pokeball from "../components/pokeball"
import World from "../components/world"

const routes = [
  {
    id: 1,
    path: "/",
    name: "World",
    icon: <World size={3} />,
  },
  {
    id: 2,
    path: "/collection",
    name: "My Pokemons",
    icon: <Pokeball size={3} />,
  },
]

export default routes
