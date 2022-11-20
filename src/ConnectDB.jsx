import { useState, useEffect, createContext } from "react";
import Loader from './components/Loader.jsx'

export const AppContext = createContext();

export const ContextProvider = (props) => {
    const [pokemonFromPokeAPI, setPokemonFromPokeAPI] = useState([])
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonDetailsAll, setPokemonDetailsAll] = useState([]);
    const [pokemonDetailsFilter, setPokemonDetailsFilter] = useState([])
    const [pokemonSliderSelection, setPokemonSliderSelection] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pokemonFilters, setPokemonFilters] = useState({
        type: "none",
        search: ""
    });
    // const [backgroundImage, setBackgroundImage] = useState([]);
    const [sliderPage, setSliderPage] = useState(0);
    const [pokemonPerSlide, setPokemonPerSlide] = useState(14);
    const [reset, setReset] = useState(0);
    const [bgImage, setBgImage] = useState({ id: 0, value: "src/assets/bg_cave.jpg" });


    //INITIAL UseEffect on PageLoad
    useEffect(() => {
        fetch(import.meta.env.VITE_HEROKU_API)
            .then(res => res.json())
            .then((res) => {
                setPokemonData(res) // FROM HEROKU 
            })
            .catch(err => {
                console.log("Error", err);
            });
        fetch(import.meta.env.VITE_POKE_API) // FROM POKEAPI DISAPPEARS
            .then(res => res.json())
            .then(async (data) => {
                try {
                    setPokemonFromPokeAPI(data.results)
                    data.results.forEach(async (e) => {                //data.results.slice(0, 14).forEach(async (e) => {
                        const pokemon = await fetch(e.url) // individual pokemon pictures
                            .then(res => res.json())
                            .then(res => {
                                setPokemonDetailsAll(pokeData => [...pokeData, res]); // 800+ times updates // localStorage.setItem("pokemon", res)
                                setPokemonDetailsFilter((pokeData => [...pokeData, res]))
                                // localStorage.setItem("PokeApiData", res)
                            })
                    })
                }
                catch { err => console.log(err) }
            })
            .catch(err => {
                console.log("Error", err);
            })
            .then(setLoading(false))
            .then(setReset(false));
    }, []);


    // // the "pagination useEffect"
    //sets the Intital Data of 809 Pokemons to 14 for Slider
    useEffect(() => {
        setLoading(true)
        setPokemonSliderSelection(pokemonDetailsFilter.slice(0, 14))
        setLoading(false)
    }, [pokemonDetailsFilter])

    // the "pagination useEffect" / sets next 14 Images for slider after button next gets clicked
    useEffect(() => {
        setPokemonSliderSelection([]);
        setLoading(true);
        Promise.all(
            pokemonDetailsFilter
                .slice(sliderPage * pokemonPerSlide, sliderPage * pokemonPerSlide + pokemonPerSlide)
                .map(async (e) => {
                    setPokemonSliderSelection(pokeData => [...pokeData, e]);
                })
        )
            .then(() => setLoading(false))
    }, [sliderPage]);


    // useEffect which gets triggered when Filter or Search change
    useEffect(() => {
        setPokemonDetailsFilter([]);
        setSliderPage(0);
        setLoading(true)
        console.log("newType", pokemonFilters.type.toLowerCase())
        Promise.all(pokemonDetailsAll
            .map(async (e) => {
                try {
                    if (e.types[1] && e.types[1].type.name === pokemonFilters.type.toLowerCase() || e.types[0].type.name === pokemonFilters.type.toLowerCase())
                        setPokemonDetailsFilter(pokeData => [...pokeData, e])
                    console.log("Fillter sollte geklappt haben")
                } catch (e) { console.log(e) }
            }))
        setLoading(false)
    }, [pokemonFilters.type]);

    // RESET FILTER ???
    // useEffect(() => {
    //     setPokemonSliderSelection([]);
    //     setLoading(true)
    //     pokemonDetailsAll
    //         .map(async (e) => {
    //             setPokemonSliderSelection(pokeData => [...pokeData, e])
    //         })
    //     setLoading(false)
    // }, []);

    //SEARCH
    useEffect(() => {
        setPokemonSliderSelection([]);
        setLoading(true)
        console.log("newSearch", pokemonFilters.search.toString())
        pokemonDetailsAll
            .map((e) => {
                if (e.name === pokemonFilters.search.toLowerCase())
                    setPokemonDetailsFilter(pokeData => [...pokeData, e]);
            })
        setLoading(false)
    }, [pokemonFilters.search]);

    //DYNAMIC SEARCH
    useEffect(() => {
        setPokemonSliderSelection([]);
        setLoading(true)
        console.log("newSearch", pokemonFilters.search.toString())
        if (pokemonFilters.search !== "") {
            const dynamicSearch = pokemonDetailsAll.filter((e) => e.name.toLowerCase().includes(pokemonFilters.search.toString().toLowerCase()));
            setPokemonDetailsFilter(dynamicSearch)
        }
        setLoading(false)
    }, [pokemonFilters.search]);


    useEffect(() => {
        console.log({
            pokemonData,
            pokemonFromPokeAPI,
            pokemonDetailsAll,
            pokemonDetailsFilter,
            pokemonSliderSelection,
            pokemonFilters,
            // backgroundImage,
            bgImage,
            reset
        })
    }, [
        pokemonData,
        pokemonFromPokeAPI,
        pokemonDetailsAll,
        pokemonDetailsFilter,
        pokemonSliderSelection,
        pokemonFilters,
        // backgroundImage,
        bgImage,
        reset]);

    return (
        <AppContext.Provider value={
            {
                sliderPage,
                setSliderPage,
                pokemonPerSlide,
                setPokemonPerSlide,
                pokemonFilters,
                setPokemonFilters,
                // backgroundImage,
                // setBackgroundImage,
                pokemonData, setPokemonData,
                pokemonDetailsAll, setPokemonDetailsAll,
                pokemonDetailsFilter, setPokemonDetailsFilter,
                pokemonSliderSelection, setPokemonSliderSelection,
                loading, setLoading,
                reset, setReset,
                bgImage, setBgImage
            }
        }>

            {loading ?
                <Loader /> :
                props.children}
        </AppContext.Provider>
    )

}

export default ContextProvider;

