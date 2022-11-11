export const filterablePokemonTypes = ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dark", "Dragon", "Steel", "Fairy"]
import { AppContext } from "../ConnectDB"
import { useContext } from "react"
export default function FilterButtons() {

    const { pokemonFilters, setPokemonFilters, setReset } = useContext(AppContext)

    function updateType(newType) {
        setPokemonFilters(prev => ({ ...prev, type: newType }))
    }

    function resetTrigger() {
        setReset(true)
    }


    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn">Filter
            </label>
            <ul className="dropdown-content">
                {filterablePokemonTypes.map(type => <li><button key={type} onClick={() => updateType(type)}>{type}</button></li>)}
                <li><button onClick={resetTrigger()}>reset Filter</button></li>
            </ul>
        </div>
    )
}

