export const filterablePokemonTypes = ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dark", "Dragon", "Steel", "Fairy"]
import { AppContext } from "../ConnectDB"
import { useContext } from "react"
export default function FilterButtons() {
    const { pokemonFilters, setPokemonFilters } = useContext(AppContext)
    function updateType(newType) {
        setPokemonFilters(prev => ({ ...prev, type: newType }))
    }
    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn">
                <div className="menu">Filter</div>
            </label>
            <ul className="dropdown-content">  
        {filterablePokemonTypes.map(type => <button key={type} onClick={() => updateType(type)}>{type}</button>)}
            </ul>
            </div>
        )
}

