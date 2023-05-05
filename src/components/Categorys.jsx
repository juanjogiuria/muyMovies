import React from 'react'

function Categorys({generos, handleCategory}) {
    return (
        <div className="categorys-container">
            <ul>
                {
                    (generos.genres)?.map((genre) => (
                        <li onClick={(e) => handleCategory(genre.id)} key={genre.id} className='categorys'>{genre.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categorys