import React, { useState } from 'react'

function SearchInput() {

  return (

    <form className='search-container'>
        <input type="text" placeholder='Search'/>
        <i className="fa-solid fa-magnifying-glass"></i>
    </form>

  )
}

export default SearchInput