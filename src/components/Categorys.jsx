import React from 'react'

function Categorys({ generos, handleCategory, handleClick, categoriaSeleccionada }) {
    return (
        <div className="categorys-container">
            <ul>
                {
                    (generos.genres)?.map((genre) => (
                        <li onClick={(e) => {
                            handleCategory(genre.id)
                            handleClick(genre.name)
                        }
                        }
                            key={genre.id}
                            className={categoriaSeleccionada === genre.name ? 'categoria-seleccionada categorys' : 'categorys'}>

                            {genre.name}

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categorys