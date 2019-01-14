import React, {Component} from 'react'
import {fetchRepos} from '../../service/repos-api'

class ReposContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            repos: []
        }
    }

    componentDidMount(){
        fetchRepos('GustavoGarciaPereira').then(res => window.console.log(res.data))
    }

    render(){
        return(
            <h1>Respos Container</h1>
        )
    }
}

export default ReposContainer