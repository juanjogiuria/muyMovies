import React, { useState } from 'react'

function TitleAndSearch({background, title, search_url}) {
    const [search, setSearch] = useState("")
    return (
        <div className='bg-title' style={background}>
            <section className='title-search'>

                <div className="title-container">

                    <h1 className='title'><img className='title-img' src={title} /> </h1>
                    {/* <p className="parrafo">Millones de peliculas, series y personajes por conocer. Adelante.</p> */}
                </div>


                <form className='search-container'>
                    <input type="text" placeholder='Millones de peliculas, series y personajes por conocer. Aqui puedes buscar lo que quieras' onChange={(e) => {
                        setSearch(e.target.value)
                        setUrl(search_url + search)
                    }} />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>


            </section>

        </div>
    )
}

export default TitleAndSearch