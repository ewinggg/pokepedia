import dynamic from "next/dynamic"

const Bug = dynamic(() => import("../components/icon/types/bug"))
const Electric = dynamic(() => import("../components/icon/types/electric"))
const Fighting = dynamic(() => import("../components/icon/types/fighting"))
const Fire = dynamic(() => import("../components/icon/types/fire"))
const Flying = dynamic(() => import("../components/icon/types/flying"))
const Ghost = dynamic(() => import("../components/icon/types/ghost"))
const Grass = dynamic(() => import("../components/icon/types/grass"))
const Ground = dynamic(() => import("../components/icon/types/ground"))
const Ice = dynamic(() => import("../components/icon/types/ice"))
const Normal = dynamic(() => import("../components/icon/types/normal"))
const Poison = dynamic(() => import("../components/icon/types/poison"))
const Psychic = dynamic(() => import("../components/icon/types/psychic"))
const Rock = dynamic(() => import("../components/icon/types/rock"))
const Steel = dynamic(() => import("../components/icon/types/steel"))
const Water = dynamic(() => import("../components/icon/types/water"))

const usePokemonTypesIcon = (type) => {
  const icons = {
    bug: <Bug size={1} />,
    electric: <Electric size={1} />,
    fighting: <Fighting size={1} />,
    fire: <Fire size={1} />,
    flying: <Flying size={1} />,
    ghost: <Ghost size={1} />,
    grass: <Grass size={1} />,
    ground: <Ground size={1} />,
    ice: <Ice size={1} />,
    normal: <Normal size={1} />,
    poison: <Poison size={1} />,
    psychic: <Psychic size={1} />,
    rock: <Rock size={1} />,
    steel: <Steel size={1} />,
    water: <Water size={1} />,
  }

  const typeIcon = icons[type] ?? <Normal size={1} />

  return typeIcon
}

export default usePokemonTypesIcon
