import React from 'react'

export const MovieItem = props => (
    <div>
        <h2>{props.name}</h2>
        <h3>Directed by <strong>{props.director}</strong></h3>

        <p>{props.plot}</p>
        <p><em>With: {props.actors}</em></p>
    </div>
)

export const MovieList = props => (
    <section>
        <h1>Movie List</h1>

        {
            props.list.map(x => (
                <MovieItem key={x.id} 
                           name={x.title}
                           actors={x.actors}
                           plot={x.plot}
                           director={x.director} />
            ))
        }
    </section>
)