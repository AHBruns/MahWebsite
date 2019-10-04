import React, { Component } from 'react'
import { Router } from '@reach/router'
import Menu from './menu'
import Splash from './splash'

class App extends Component {
    render() {
        return (
            <>
                <Menu />
                <Router>
                    <Splash path='*' />
                </Router>
            </>
        )
    }
}

export default App