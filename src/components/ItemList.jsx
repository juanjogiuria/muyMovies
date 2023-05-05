import React from 'react'
import Item from './Item'

function ItemList({movies}) {
  return (
    <div className="movies-container">
                {
                    (movies.lenght == 0) ? <p className="not-found">Not Found</p> : movies.map((res, pos) => {
                        return (
                            <Item info={res} key={pos} />
                        )
                    })
                }
    </div>
  )
}

export default ItemList