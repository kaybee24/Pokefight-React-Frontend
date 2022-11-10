
import { useState, useEffect, createContext } from "react";
import Loader from './components/Loader.jsx'

export const AppContext = createContext();

export const ContextProvider = (props) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonImages, setPokemonImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pokemonFilters, setPokemonFilters] = useState({
        type: "none",
        search: ""
    });
    const [backgroundImage, setBackgroundImage] = useState([]);
    const [sliderPage, setSliderPage] = useState(0);
    const [pokemonPerSlide, setPokemonPerSlide] = useState(14);

    // "page" = pageIndex * size
    //          1        4   =  5-9
    const [pokemonFromPokeAPI, setPokemonFromPokeAPI] = useState([])

    // the "pagination useEffect"
    useEffect(() => {
        setPokemonImages([]);
        // function get14PokemonsWorthOfImages() {
        setLoading(true)
        pokemonFromPokeAPI
            .slice(sliderPage * pokemonPerSlide, sliderPage * pokemonPerSlide + pokemonPerSlide)
            .map(async (e) => {
                console.log("Databerforeslicefetching", e)
                const pokemon = await fetch(e.url)
                    .then(res => res.json())
                    .then(res => {
                        setPokemonImages(pokeData => [...pokeData, res]);
                        console.log("pokemonImagesafterslicing", pokemonImages)
                    })
            })
        setLoading(false)
        // .then(() => setLoading(false))
        //}
        // Promise.all(get14PokemonsWorthOfImages())
        //     .then(allThoseResults => setPokemonImages(allThoseResults))
        //     .then(() => setLoading(false))
    }, [sliderPage]);




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
                    data.results.slice(0, 14).forEach(async (e) => {                //data.results.slice(0, 14).forEach(async (e) => {
                        const pokemon = await fetch(e.url) // individual pokemon pictures
                            .then(res => res.json())
                            .then(res => {
                                setPokemonImages(pokeData => [...pokeData, res]); // 800+ times updates // localStorage.setItem("pokemon", res)
                            })
                        // .then(setLoading(false));
                    })
                }
                catch { err => console.log(err) }
            })
            .catch(err => {
                console.log("Error", err);
            });
    }, []);

    useEffect(() => {
        console.log({
            pokemonData,
            pokemonFromPokeAPI,
            pokemonImages,
            pokemonFilters,
            backgroundImage
        })
    }, [
        pokemonData,
        pokemonFromPokeAPI,
        pokemonImages,
        pokemonFilters,
        backgroundImage]);

    return (
        <AppContext.Provider value={
            {
                sliderPage,
                setSliderPage,
                pokemonPerSlide,
                setPokemonPerSlide,
                pokemonFilters,
                setPokemonFilters,
                backgroundImage,
                setBackgroundImage,
                pokemonData, setPokemonData,
                pokemonImages, setPokemonImages,
                loading, setLoading
            }
        }>

            {loading ?
                <Loader />
                :
                props.children}
        </AppContext.Provider>
    )

}

export default ContextProvider;

