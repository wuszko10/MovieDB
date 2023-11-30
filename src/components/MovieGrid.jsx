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
        navigate(`/films/${encodeURIComponent(title)}/${id}`)
    };

    return (
        <div className="movie-grid">
            {movies.slice(0, visibleMovies).map((movie) => (
                <div className="item" onClick={ () => handleItem(movie.title, movie.id)}>
                    <div className="rating-container">
                        <div className="rating">
                            <FaStar color="white" />
                            <span>{movie.rating}</span>
                        </div>
                    </div>
                    <img src={movie.image} alt={movie.title} />
                    <h3>{movie.title}</h3>
                    <div className="details">
                        <p>{`${movie.genre}, ${movie.year}`}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieGrid;
