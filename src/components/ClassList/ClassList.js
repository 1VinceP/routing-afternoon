import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class ClassList extends Component {
    constructor() {
        super();

        this.state = {
            students: []
        }
    }

    componentDidMount() {
        return axios.get('http://localhost:3005/students')
                    .then( res => {
                        console.log( res.data )
                        this.setState({
                            students: res.data
                        })
                    })
    }

    render() {
        const students = this.state.students.map( ( student, i ) => (
            <div key={i}>
                <Link to={`/student/${student.id}`}><h3>{ student.first_name } { student.last_name }</h3></Link>
            </div>
        ))

        return(
            <div>
                <h1>ClassList: </h1>
                { students }
            </div>
        )
    }




    
}