import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';

export const Home = () => {

    let { movies, setMovies, searchQuery } = React.useContext(AppContext);

    console.log(movies);

    return (
        <section id="wrapper" className="w-full">
            <section className="flex flex-row flex-wrap space-x-8 w-10/12 justify-between mx-auto my-24">
                {searchQuery.length === 0 ? 

                    movies.map((element, index) => {
                        return (
                            <div className="border border-2 border-double border-gray p-24">
                                {element.title}
                            </div>
                        )
                    })
                :
                    searchQuery.map((element, index) => {
                        return (
                            <div className="border border-2 border-double border-gray p-24">
                                {element.title}
                            </div>
                        )
                    })
                    
            }
            </section>
        </section>
    )


}