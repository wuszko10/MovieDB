import React from 'react';
import './style.css';
import {useParams} from "react-router-dom";

const SearchResults = () => {
    const { query } = useParams();

    return (
        <div>
            <h2>Wyniki wyszukiwania dla: {query}</h2>
        </div>
    );
};

export default SearchResults;
