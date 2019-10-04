import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

class ProviderizedApp extends Component {
    constructor(props) {
        super(props)
        document.body.style.margin = '0'
    }

    render() {
        return (
            <App />
        )
    }
}

ReactDOM.render(<ProviderizedApp />, document.getElementById('react-container-div'))