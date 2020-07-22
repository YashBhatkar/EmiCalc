import React from 'react'
import store from '../store.js'
import Calculator from './Calculator.js'

function Graph() {
    store.subscribe(Calculator)
    return (
        <div>
            
        </div>
    )
}

export default Graph
