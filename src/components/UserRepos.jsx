import React from 'react'

export const UserRepos = ({ UserReposList, errorMessage }) => {
    return (
        <div className="userReposContainer">
            {
                UserReposList.length ?
                    <ul>
                        {
                            UserReposList.map((repoData, index) => {
                                return (
                                    <li key={index + 1}>
                                        {repoData.name}
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