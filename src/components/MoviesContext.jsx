import React, { createContext, useContext, useState } from 'react';
import p1 from "./images/hp_kf_2001.jpg";
import p2 from "./images/hp_kt_2002.jpg";
import p3 from "./images/hp_wa_2004.jpg";
import p4 from "./images/hp_co_2005.jpg";
import p5 from "./images/hp_zf_2007.jpg";
import p6 from "./images/hp_kp_2009.jpg";
import p7 from "./images/hp_is_2010.jpg";
import p8 from "./images/hp_is_2011.jpg";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
    const moviesData = [
        {
            id: 1,
            image: p1,
            title: 'Harry Potter i Kamień Filozoficzny',
            genre: 'Przygodowy, Fantasy',
            year: 2001,
            rating: 7.5,
            producer: 'David Heyman',
            description: '"Harry Potter i Kamień Filozoficzny" rozpoczyna epopeję młodego chłopca, który dowiaduje się, że jest czarodziejem, gdy otrzymuje list z zaproszeniem do Hogwartu, szkoły magii. Po przybyciu na Hogwart Harry poznaje przyjaciół Ronalda Weasleya i Hermionę Granger. W trakcie roku szkolnego odkrywa, że Kamień Filozoficzny, ukryty w szkole, może przekształcać metal w złoto i dawać nieśmiertelność. Jednakże, mroczne siły chcą zdobyć ten kamień dla własnych celów, co stawia Harry\'ego w centrum walki dobra ze złem.',
            age: '7+',
            mainActors: 'Daniel Radcliffe, Emma Watson, Rupert Grint',
        },
        {
            id: 2,
            image: p2,
            title: 'Harry Potter i Komnata Tajemnic',
            genre: 'Przygodowy, Fantasy',
            year: 2002,
            rating: 7.4,
            producer: 'David Heyman',
            description: 'W "Harrym Potterze i Komnacie Tajemnic" Harry wraca do Hogwartu na swój drugi rok nauki. Okazuje się, że tajemnicza Komnata Tajemnic została otwarta, a ktoś zaczyna atakować uczniów. Harry odkrywa tajemnicze Dziennik Toma Riddle\'a, który pozwala mu cofnąć się w czasie i śledzić wydarzenia sprzed lat. Musi odkryć tożsamość osoby otwierającej Komnatę Tajemnic i powstrzymać groźne potwory, które wypuszczono. W międzyczasie, przyjaźń Harry\'ego z Ronem i Hermioną staje się silniejsza, a zagrożenie dla Hogwartu nabiera tempa.',
            age: '12+',
            mainActors: 'Daniel Radcliffe, Emma Watson, Rupert Grint',
        },
        {
            id: 3,
            image: p3,
            title: 'Harry Potter i więzień Azkabanu',
            genre: 'Przygodowy, Fantasy',
            year: 2004,
            rating: 7.7,
            producer: 'David Heyman',
            description: '"Harry Potter i więzień Azkabanu" przedstawia Harry\'ego, który wraca do Hogwartu, a wraz z nim pojawia się nowy nauczyciel obrony przed czarną magią, Remus Lupin. W międzyczasie dowiaduje się, że niebezpieczny więzień, Syriusz Black, uciekł z Azkabanu i jest uznawany za groźne zagrożenie. Jednak Harry odkrywa, że tajemnice związane z przeszłością jego rodziny są bardziej skomplikowane, niż sądził. Z pomocą nowych sojuszników i informacji z przeszłości, Harry musi zmierzyć się z prawdą o zdradzie i tajemnicach swojego ojca.',
            age: '12+',
            mainActors: 'Daniel Radcliffe, Emma Watson, Rupert Grint',
        },
        {
            id: 4,
            image: p4,
            title: 'Harry Potter i Czara Ognia',
            genre: 'Przygodowy, Fantasy',
            year: 2005,
            rating: 7.6,
            producer: 'David Heyman',
            description: 'W "Harrym Potterze i Czarze Ognia" Harry zostaje nieoczekiwanie wybrany do wzięcia udziału w Turnieju Trójmagicznym, co zaskakuje zarówno niego, jak i całą społeczność magiczną. Turniej ten wiąże się z niebezpieczeństwem, które wykracza poza zwykłe zadania szkolne, a Harry musi stawić czoła zarówno magicznym wyzwaniom, jak i rosnącym zagrożeniom ze strony Lorda Voldemorta. To także okres, w którym przyjaźń między bohaterami zostaje poddana próbie, a tajemnice z przeszłości wchodzą na światło dzienne.',
            age: '12+',
            mainActors: 'Daniel Radcliffe, Emma Watson, Rupert Grint',
        },
        {
            id: 5,
            image: p5,
            title: 'Harry Potter i Zakon Feniksa',
            genre: 'Przygodowy, Fantasy',
            year: 2007,
            rating: 7.5,
            producer: 'David Heyman',
            description: 'W "Harrym Potterze i Zakonie Feniksa" Harry staje przed wyzwaniem przekonania społeczności magii o powrocie Lorda Voldemorta, który zagraża całemu światu czarodziejów. Harry zakłada organizację o nazwie Zakon Feniksa, aby przeciwstawić się mrocznym siłom, ale jednocześnie musi stawić czoła niewiary i opozycji ze strony Ministerstwa Magii. To także okres, w którym Harry zaczyna doświadczać mrocznych wizji z umysłu Voldemorta, co wpływa na jego psychikę.',
            age: '12+',
            mainActors: 'Daniel Radcliffe, Emma Watson, Rupert Grint',
        },
        {
            id: 6,
            image: p6,
            title: 'Harry Potter i Książę Półkrwi',
            genre: 'Przygodowy, Fantasy',
            year: 2009,
            rating: 7.5,
            producer: 'David Heyman',
            description: '"Harry Potter i Książę Półkrwi" skupia się na odkryciu tajemniczych wspomnień z przeszłości Lorda Voldemorta, które mogą prowadzić do jego unicestwienia. W międzyczasie, Harry dowiaduje się coraz więcej o mrocznych planach Voldemorta, a uczucia między bohaterami ewoluują. Rozpoczyna się także intensywna walka między siłami dobra a złem, a Hogwart staje się miejscem coraz większych napięć.',
            age: '12+',
            mainActors: 'Daniel Radcliffe, Emma Watson, Rupert Grint',
        },
        {
            id: 7,
            image: p7,
            title: 'Harry Potter i Insygnia Śmierci I',
            genre: 'Przygodowy, Fantasy',
            year: 2010,
            rating: 7.5,
            producer: 'David Heyman',
            description: 'W pierwszej części "Harry\'ego Pottera i Insygni Śmierci" Harry i jego przyjaciele opuszczają Hogwart i wyruszają w niebezpieczną podróż, aby zniszczyć horkruksy - fragmenty duszy Voldemorta. Świat magii pogrąża się w chaosie, a Harry zdaje sobie sprawę, że jego walka z Voldemortem osiąga punkt kulminacyjny.',
            age: '12+',
            mainActors: 'Daniel Radcliffe, Emma Watson, Rupert Grint',
        },
        {
            id: 8,
            image: p8,
            title: 'Harry Potter i Insygnia Śmierci II',
            genre: 'Przygodowy, Fantasy',
            year: 2011,
            rating: 7.7,
            producer: 'David Heyman',
            description: 'W finałowej części serii Harry i jego sojusznicy zmierzają do wielkiego starcia z Voldemortem. Bitwa o Hogwart staje się epickim starciem, a tajemnice z przeszłości Harry\'ego ostatecznie wyjaśniają się. To czas, w którym przyjaźń, odwaga i poświęcenie zostają wystawione na największą próbę, a Harry musi dokonać ostatecznego wyboru między życiem a śmiercią.',
            age: '12+',
            mainActors: 'Daniel Radcliffe, Emma Watson, Rupert Grint',
        },
    ];

    const [movies, setMovies] = useState(moviesData);

    return (
        <MoviesContext.Provider value={{ movies, setMovies }}>
            {children}
        </MoviesContext.Provider>
    );
};

export const useMovies = () => {
    const context = useContext(MoviesContext);
    if (!context) {
        throw new Error('useMovies must be used within a MoviesProvider');
    }
    return context;
};
