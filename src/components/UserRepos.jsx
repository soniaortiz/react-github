import React from 'react'
import { connect } from 'react-redux'
// import {dispatch} from 'redux'
import { bookmarkRepoAction } from '../redux/actions'

export const UserRepos = ({ UserReposList, errorMessage }) => {
    const bookMarkRepo = () => {
        console.log("bookMarkRepo")
    }

    return (
        <div className="userReposContainer">
            {
                UserReposList.length ?
                    <ul>
                        {
                            UserReposList.map((repoData, index) => {
                                return (
                                    <li key={repoData.id} >
                                        <input type="checkbox" value={index} onClick={bookMarkRepo} />
                                        <a href={repoData.svn_url}>{repoData.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    :
                    <p>{errorMessage}</p>

            }

        </div>
    )
}

export default connect(null, {
    // dispatchBookmark: () => dispatch(bookmarkRepoAction)

})(UserRepos)