import MovieCard from "../components/MovieCard.jsx"
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.jsx";
import { data } from "react-router";

import {getMovies, searchMovies} from "../../api.js"

const Home = () => {


    const [searchQuery ,setSearchQuery] = useState("");
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const submitFn = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        const loadMovies = async () => {
            const resMovies = await getMovies();
            setMoviesList(resMovies.results);
            setLoading(false);
        }

        loadMovies();

    },[])

    const updateMovieList = (mv) => {
        setLoading(true);
        
        if(mv.trim() === ""){
            const loadMovies = async () => {
                const resMovies = await getMovies();
                setMoviesList(resMovies.results);
                setLoading(false);
            }
            loadMovies();
        }
        else{

            const searchMv = async (mv) => {
                const searchedMovies = await searchMovies(mv);
                setMoviesList(searchedMovies.results);
                setLoading(false);
            }

            searchMv(mv);
        }
    }

    return (
        <div className="Home">
            
            <NavBar/>
            <form className="search-form" onSubmit={submitFn}>
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="search for movies"
                    value = {searchQuery}
                    onChange={(event) => {
                        setSearchQuery(event.target.value);
                        console.log(searchQuery);
                    }}
                />
                <button 
                    type="submit" 
                    className="search-button" 
                    onClick={() => {
                        updateMovieList(searchQuery)
                    }}
                >
                    Seacrh
                </button>
            </form>
            <div className="movies-grid">
                {
                    !isLoading&&moviesList.map((movie, index) => (
                        <MovieCard movieProp={movie} key={movie.id} />
                    ))
                }
            </div>
        </div>
    );
}

export default Home;