import React, {useState} from 'react';
import './style.css'
import {useNavigate} from "react-router-dom";

const AddMovie = () => {

    const navigate = useNavigate();
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isFilmAdded, setIsFilmAdded] = useState(false);
    const [videoPreview, setVideoPreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            // Ustaw podgląd filmu
            setVideoPreview(URL.createObjectURL(file));
        }
    };

    const handleAdd = async (event) => {
        event.preventDefault();

        // Symulacja dodawania filmu z opóźnieniem i postępem przesłania
        try {
            for (let progress = 0; progress <= 100; progress += 10) {
                setUploadProgress(progress);
                await new Promise((resolve) => setTimeout(resolve, 500)); // Symulacja opóźnienia
            }

            // Tutaj możesz dodać rzeczywistą logikę dodawania filmu
            // Jeśli operacja zakończy się sukcesem, ustaw setIsFilmAdded(true);
            setIsFilmAdded(true);
        } catch (error) {
            // Obsługa błędów, jeśli dodanie filmu nie powiodło się
            console.error("Błąd podczas dodawania filmu:", error);
            setIsFilmAdded(false);
        }
    };

    return (
        <div className="main-box add-movie-box">
            <div className="add-movie-container">
                <h2>Dodaj film</h2>
                <form encType="multipart/form-data" className="form-add-movie">
                    <div className="form-global form-left-column">
                        <p>Szczegółowe informacje</p>
                        <input type="text" id="title" name="title" placeholder="Tytuł" />
                        <input type="text" id="genre" name="genre" placeholder="Gatunki" />
                        <input type="text" id="year" name="year" placeholder="Rok produkcji" />
                        <input type="text" id="producer" name="producer" placeholder="Producent" />
                        <textarea id="description" name="description" placeholder="Opis" rows="10" />
                        <input type="text" id="age" name="age" placeholder="Wiek" />
                        <button type="submit" onClick={handleAdd}>Dodaj film</button>
                    </div>
                    <div className="form-right-column">
                        <div className="video-preview">
                            {videoPreview ? (
                                <video id="videoPreview" controls style={{ width: '100%', height: '100%' }}>
                                    <source src={videoPreview} type="video/mp4" />
                                    Twoja przeglądarka nie obsługuje tagu video.
                                </video>
                            ) : (
                                uploadProgress === 100 ? (
                                    <p>Film został dodany.</p>
                                ) : (
                                    <p>Nie przesłano filmu</p>
                                )
                            )}
                        </div>
                        <label htmlFor="videoFile" className="custom-file-upload">
                            <span className="plus-icon">+</span> Dodaj film
                        </label>
                        <input type="file" id="videoFile" name="videoFile" accept=".mp4" onChange={handleFileChange} style={{ display: 'none' }} />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddMovie;
