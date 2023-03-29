import React from 'react'

function SearchSection() {
    return (
        <section className='section-container'>
            <div>
                <h1>Bienvenidos.</h1>
                <h2>Millones de peliculas, series y actores por descubrir. Adelante.</h2>
            </div>

            <div className='search-container2'>
                <input type="text" placeholder='Search' />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </section>
    )
}

export default SearchSection