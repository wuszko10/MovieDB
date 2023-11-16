import p1 from './images/hp_kf_2001.jpg';
import p2 from './images/hp_kt_2002.jpg';
import p3 from './images/hp_wa_2004.jpg';
import p4 from './images/hp_co_2005.jpg';
import p5 from './images/hp_zf_2007.jpg';
import p6 from './images/hp_kp_2009.jpg';
import p7 from './images/hp_is_2010.jpg';
import p8 from './images/hp_is_2011.jpg';
import React from 'react';
import './style.css'
import Grid from "./grid";
import Item from "./item";

const Main = () => {

    const movies = [
        {
            id: 1,
            image: p1,
            title: 'Harry Potter i Kamień Filozoficzny ',
            genre: 'Akcja',
            year: 2001,
            rating: 7.5,
        },
        {
            id: 2,
            image: p2,
            title: 'Harry Potter i Komnata Tajemnic',
            genre: 'Akcja',
            year: 2002,
            rating: 7.4,
        },
        {
            id: 3,
            image: p3,
            title: 'Harry Potter i więzień Azkabanu',
            genre: 'Akcja',
            year: 2004,
            rating: 7.7,
        },
        {
            id: 4,
            image: p4,
            title: 'Harry Potter i Czara Ognia',
            genre: 'Akcja',
            year: 2005,
            rating: 7.6,
        },
        {
            id: 5,
            image:  p5,
            title: 'Harry Potter i Zakon Feniksa',
            genre: 'Akcja',
            year: 2007,
            rating: 7.5,
        },
        {
            id: 6,
            image: p6,
            title: 'Harry Potter i Książę Półkrwi',
            genre: 'Akcja',
            year: 2009,
            rating: 7.5,
        },
        {
            id: 7,
            image: p7,
            title: 'Harry Potter i Insygnia Śmierci I',
            genre: 'Akcja',
            year: 2010,
            rating: 7.5,
        },
        {
            id: 8,
            image: p8,
            title: 'Harry Potter i Insygnia Śmierci II',
            genre: 'Akcja',
            year: 2011,
            rating: 7.7,
        },
    ];

    return (
        <div className="main">
            <div className="main-box">
                <section className="sectionGrid">
                    <h2>Filmy</h2>
                    <Grid columns={5}>
                        {movies.map((movie) => (
                            <Item key={movie.id} movie={movie} />
                        ))}
                    </Grid>
                </section>
            </div>
        </div>
    );
};

export default Main;
