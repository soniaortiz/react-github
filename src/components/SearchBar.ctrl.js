import React from 'react'
const baseURL = 'https://api.github.com/'
    // let timerId


export function makeCall ({ target }){
    const userName = target.value
    console.log(target.value)
    if (this.timerId) {
        clearTimeout(this.timerId)
    }

    if (userName) {
        const urlQuery = this.props.searchOpt ? `${baseURL}users/${userName}/repos` : `${baseURL}search/repositories?q='${userName}'`

        this.timerId = setTimeout(() => { // throttling call to github API
            // search by user name and list repositories
            fetch(urlQuery)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    console.log(data)
                    this.props.getRepos(
                        {
                            list: this.props.searchOpt ? data: data.items,
                            message: data.message
                        }
                    )
                })
                .catch((e) => {
                    console.log(e)
                    return e
                })
        }, 1000)

    } else {
        this.props.getRepos(
            {
                list: [],
                message: ''
            }
        )
    }

}