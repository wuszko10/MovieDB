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
