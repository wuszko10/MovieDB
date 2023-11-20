import React from 'react';
import './items.css'
import {FaStar} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Item = ({ movie }) => {
    const {
        image,
        title,
        genre,
        year,
        description,
        rating,
    } = movie;

    return (
        // <div className="item">
        //     <div className="rating-container">
        //         <div className="rating">
        //             <FaStar color="white" />
        //             <span>{rating}</span>
        //         </div>
        //     </div>
        //     <img src={image} alt={title} />
        //     <h3>{title}</h3>
        //     <div className="details">
        //         <p>{genre}, {year}</p>
        //     </div>
        // </div>

        <Link to={`/movie/${id}`} className="item">
            <div className="rating-container">
                <div className="rating">
                    <FaStar color="white" />
                    <span>{rating}</span>
                </div>
            </div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <div className="details">
                <p>{genre}, {year}</p>
            </div>
        </Link>
    );
};

export default Item;
