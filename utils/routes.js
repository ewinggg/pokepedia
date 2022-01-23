import Pokeball from "../components/pokeball"
import World from "../components/world"
import { GiSchoolBag, GiWorld } from "react-icons/gi"

const routes = [
  {
    id: 1,
    path: "/",
    name: "Pokemons",
    icon: <GiWorld size={50} />,
  },
  {
    id: 2,
    path: "/collection",
    name: "My Bag",
    icon: <GiSchoolBag size={50} />,
  },
]

export default routes
