import React from 'react'
import ReactDOM from 'react-dom'

import { MovieList } from './movie-list.jsx' 
import movies from './database.json'

const App = props => (
    <div>
        <MovieList list={movies.slice(0, 20)} />
    </div>
)

ReactDOM.render(<App />, document.getElementById('app'))