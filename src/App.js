import { useState,useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

//API KEY 
const API_URL = 'https://www.omdbapi.com?apikey=773f1f54';

const App = () => {

    //Set Our State using Desctructuring Method
    const [movies, setMovie ] = useState([]);
    
    //Search Movie State

    const [searchTerm, setSearchTerm ] = useState('');

    /** Function That Fetch Our Movie */
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data     = await response.json();
        setMovie(data.Search);
    }
    
    useEffect(()=>{
        searchMovies('Spiderman');
    },[]);
    return(
        <div className="app">
            <h1>Find Movie </h1>

            <div className="search">
                <input 
                placeholder="Search for movies" 
                value={searchTerm}
                onChange={(e)=>{
                    setSearchTerm(e.target.value)
                }}
                />
                <img 
                src={SearchIcon} 
                alt="Search"
                onClick={()=> searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0 ? 
                (
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie = {movie} />
                        ))}
                    </div>

                ) :

                (
                    <div className="empty">
                        <h2>No Movies for found</h2>
                    </div>
                )
            }
           
        </div>
    );
}
export default App;