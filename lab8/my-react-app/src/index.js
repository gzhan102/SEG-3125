import React from 'react'
import ReactDOM from 'react-dom'
import Person from './components/Person'

const element = (
    <>
        <Person name='Tommy' age='20'></Person>
    </>
)

ReactDOM.render(element, document.getElementById('root'))