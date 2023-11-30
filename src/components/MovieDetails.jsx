import React from 'react';
import { useParams } from 'react-router-dom';
import {useMovies} from "./MoviesContext";
import { FaPlayCircle } from 'react-icons/fa';
import './style.css';

const MovieDetails = () => {
    const { title, id } = useParams();
    const { movies, setMovies } = useMovies();

    const selectedMovie = movies.find(movie => movie.id === parseInt(id, 10));

    return (
        <div className="main-box movie-box">
            <div className="movie-box-first-column">
                <img src={selectedMovie.image} alt={selectedMovie.title} />
                {/*<button onClick="#"><FaPlayCircle />;</button>*/}
            </div>
            <div className="movie-box-second-column">
                <h2>{selectedMovie.title}</h2>
                <div className="movie-box-detail-row">
                    <ul className="Flex">
                        <li className="Flex-item">{selectedMovie.year}</li>
                        <li className="Flex-item">{selectedMovie.age}</li>
                    </ul>
                </div>
                <p>{selectedMovie.description}</p>
                <table>
                    <tbody>
                    <tr>
                        <td className="td">Aktorzy:</td>
                        <td>{selectedMovie.mainActors}</td>
                    </tr>
                    <tr>
                        <td>Producent</td>
                        <td>{selectedMovie.producer}</td>
                    </tr>
                    <tr>
                        <td>Gatunek</td>
                        <td>{selectedMovie.genre}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MovieDetails;
