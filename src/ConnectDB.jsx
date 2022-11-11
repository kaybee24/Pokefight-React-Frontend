import { useState, useEffect, createContext } from "react";
import Loader from './components/Loader.jsx'

export const AppContext = createContext();

export const ContextProvider = (props) => {
    const [pokemonFromPokeAPI, setPokemonFromPokeAPI] = useState([])
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonImages, setPokemonImages] = useState([]);
    const [pokemonImageSelection, setPokemonImageSelection] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pokemonFilters, setPokemonFilters] = useState({
        type: "none",
        search: ""
    });
    const [backgroundImage, setBackgroundImage] = useState([]);
    const [sliderPage, setSliderPage] = useState(0);
    const [pokemonPerSlide, setPokemonPerSlide] = useState(14);
    const [reset, setReset] = useState();



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
                                setPokemonImages(pokeData => [...pokeData, res]); // 800+ times updates // localStorage.setItem("pokemon", res)
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
    // useEffect(() => {
    //     setPokemonImages([]);
    //     setLoading(true);
    //     Promise.all(
    //         pokemonFromPokeAPI
    //             .slice(sliderPage * pokemonPerSlide, sliderPage * pokemonPerSlide + pokemonPerSlide)
    //             .map(async (e) => {
    //                 console.log("Databerforeslicefetching", e)
    //                 const pokemon = await fetch(e.url)
    //                     .then(res => res.json())
    //                     .then(res => {
    //                         setPokemonImages(pokeData => [...pokeData, res]);
    //                         console.log("pokemonImagesafterslicing", pokemonImages)
    //                     })
    //             })
    //     )
    //         .then(() => setLoading(false))
    // }, [sliderPage]);

    //sets the Intital Data of 809 Pokemons to 14 for Slider
    useEffect(() => {
        setLoading(true)
        setPokemonImageSelection(pokemonImages.slice(0, 14))
        setLoading(false)
    }, [pokemonImages])

    // the "pagination useEffect" / sets next 14 Images for slider after button next gets clicked
    useEffect(() => {
        setPokemonImageSelection([]);
        setLoading(true);
        Promise.all(
            pokemonImages
                .slice(sliderPage * pokemonPerSlide, sliderPage * pokemonPerSlide + pokemonPerSlide)
                .map(async (e) => {
                    setPokemonImageSelection(pokeData => [...pokeData, e]);
                })
        )
            .then(() => setLoading(false))
    }, [sliderPage]);

    // useEffect which gets triggered when Filter or Search change

    useEffect(() => {
        setPokemonImageSelection([]);
        setLoading(true)
        console.log("newType", pokemonFilters.type.toLowerCase())
        Promise.all(pokemonImages
            .map(async (e) => {
                try {
                    if (e.types[1] && e.types[1].type.name === pokemonFilters.type.toLowerCase() || e.types[0].type.name === pokemonFilters.type.toLowerCase())
                        setPokemonImageSelection(pokeData => [...pokeData, e])
                } catch (e) { console.log(e) }
            }))
        setLoading(false)
    }, [pokemonFilters.type]);


    useEffect(() => {
        setPokemonImageSelection([]);
        setLoading(true)
        console.log("newSearch", pokemonFilters.search.toString())
        pokemonImages
            .map((e) => {
                if (e.name === pokemonFilters.search.toLowerCase())
                    setPokemonImageSelection(pokeData => [...pokeData, e]);
            })
        setLoading(false)
    }, [pokemonFilters.search]);


    useEffect(() => {
        console.log({
            pokemonData,
            pokemonFromPokeAPI,
            pokemonImages,
            pokemonImageSelection,
            pokemonFilters,
            backgroundImage
        })
    }, [
        pokemonData,
        pokemonFromPokeAPI,
        pokemonImages,
        pokemonImageSelection,
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
                pokemonImageSelection, setPokemonImageSelection,
                loading, setLoading,
                reset, setReset
            }
        }>

            {loading ?
                <Loader /> :
                props.children}
        </AppContext.Provider>
    )

}

export default ContextProvider;

