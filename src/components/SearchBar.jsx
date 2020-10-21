import React from 'react'
import {makeCall} from './SearchBar.ctrl'

const baseURL = 'https://api.github.com/'

export class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.timerId = undefined
    }


    render() {
        return (
            <div>
                <input type="text" onChange={makeCall.bind(this)} id="searchBar" alt="searchBar"/>
                <button>Search</button>
            </div>
        )
    }
}