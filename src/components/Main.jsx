import React from 'react';
import './style.css'
import MovieGrid from "./MovieGrid";

const Main = () => {

    return (
        <div className="main">
            <div className="main-box">
                <section className="sectionGrid">
                    <h2>Filmy</h2>
                    <MovieGrid />
                </section>
            </div>
        </div>
    );
};

export default Main;
