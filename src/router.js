import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home'
import About from './components/About/About'
import History from './components/History/History'
import Contact from './components/Contact/Contact'
import ClassList from './components/ClassList/ClassList'
import Student from './components/Student/Student'

export default (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/about' render={ () => {
            return(
                    <About>
                        <Switch>
                            <Route path='/about/history' component={ History } />
                            <Route path='/about/contact' component={ Contact } />
                        </Switch>
                    </About>
            )
        } }/>
        <Route path='/classlist' component={ ClassList } />
        <Route path='/student/:id' component={ Student } />
    </Switch>
)