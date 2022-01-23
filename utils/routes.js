import Pokeball from "../components/pokeball"
import World from "../components/world"
import { GiSchoolBag, GiWorld } from "react-icons/gi"

const routes = [
  {
    id: 1,
    path: "/",
    name: "Pokemons",
    icon: <GiWorld size={37} />,
  },
  {
    id: 2,
    path: "/collection",
    name: "My Bag",
    icon: <GiSchoolBag size={37} />,
  },
]

export default routes
