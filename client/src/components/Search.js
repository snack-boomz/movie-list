import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';

export const Search = () => {

    let { movies, inputText, setInputText, searchQuery, setSearchQuery } = React.useContext(AppContext);

    useEffect(() => { 

        let filteredMovies = movies.filter((movie, index) => {

            if (movie.title.toLowerCase().includes(inputText)) {
                return true;
            }

        })

        setSearchQuery(filteredMovies);
        console.log(searchQuery);


    }, [inputText])

    const inputHandler = (event) => {
        
        let inputtedText = event.target.value.toLowerCase();

        console.log(inputtedText);

        setInputText(inputtedText);
    }

    return (
        <section id="wrapper" className="w-full">
            <input type="text"
            placeholder="Search movies..."
            onChange={ inputHandler }
            className="w-2/12 mx-auto my-8 block border border-2 border-double border-gray">

            </input>
        </section>
    )


}