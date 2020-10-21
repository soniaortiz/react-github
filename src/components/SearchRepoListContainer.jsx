import React from 'react'
import { SearchBar } from './SearchBar'
import {UserRepos} from './UserRepos'


export class SearchRepoListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            repos: [],
            error: '',
            searchByUser: true
        }
    }

    retriveRepos = ({list, message}) => {
        this.setState({
            repos: list,
            error: message
        })
    }

    searchByUserOpt = ()=>{
        this.setState({
            repos: [],
            error: '',
            searchByUser: !this.state.searchByUser
        })
    }

    render() {
        return (<div>
            <h1>GitHub Search</h1>
            <h5>you can either search by user name or repository name</h5>
            <button onClick={this.searchByUserOpt}>change search option</button>
            <button><a href="/bookmarked-repos"> bookmarked repos</a></button>
            <SearchBar getRepos={this.retriveRepos} searchOpt = {this.state.searchByUser}/>
            <UserRepos UserReposList={this.state.repos} errorMessage={this.state.error}/>
        </div >)
    }

}