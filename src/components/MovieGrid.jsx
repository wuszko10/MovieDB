import React, {useState} from 'react';
import './style.css';
import './items.css';
import {FaStar} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import {useMovies} from "./MoviesContext";

const MovieGrid = () => {
    const [visibleMovies, setVisibleMovies] = useState(9);
    const navigate = useNavigate();
    const { movies } = useMovies();

    const handleItem = (title, id) => {
        navigate(`/details/${encodeURIComponent(title)}/${id}`)
    };

    const handleShowMore = () => {
        setVisibleMovies(prevVisibleMovies => prevVisibleMovies + 9);
    };

    return (
        <div className="movie-grid">
            {movies.slice(0, visibleMovies).map((movie) => (
                <div className="item" key={movie.id} onClick={() => handleItem(movie.title, movie.id)}>
                    <img src={movie.image} alt={movie.title} />
                    <h3>{movie.title}</h3>
                </div>
            ))}
            {visibleMovies < movies.length && (
                <div  className="show-more-button">
                    <button onClick={handleShowMore}>
                        Więcej
                    </button>
                </div>
            )}
        </div>
    );
};

export default MovieGrid;
