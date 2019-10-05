import React, { Component } from 'react'
import BashLine from './bashLine'
import { bash } from '../bash/bash'
import uuidv4 from 'uuid/v4'

class Terminal extends Component {
    constructor(props) {
        super(props)
        this.bashHandler = this.bashHandler.bind(this)
        this.state = {
            bashContext: null,
            lines: [
                <BashLine fixed={true} content='Psst! Try `help`' />,
                <BashLine placeholder="" handler={this.bashHandler} key={uuidv4()} />
            ],
            nonce: 0
        }
    }

    bashHandler(str) {
        let [outputLines, bashContext, lines] = bash(str, this.state.bashContext, this.state.lines)
        this.state.bashContext = bashContext
        // console.log(outputLines)
        outputLines = outputLines.map(outputLine => <BashLine fixed={true} isOutput={true} content={outputLine} key={uuidv4()} />)
        // console.log(outputLines)
        outputLines.push(
            <BashLine placeholder="" handler={this.bashHandler} key={uuidv4()} />
        )
        console.log(lines, outputLines)
        this.setState(state => {
            console.log('2')
            return {
                ...state,
                lines: lines.concat(outputLines)
            }
        })
        return null
    }

    render() {
        console.log(this.state)
        return (
            <div
                style={{
                    width: 'calc(100% - 40px)',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: '65vh',
                    maxWidth: '1020px',
                    padding: '20px 10px 0 10px',
                    border: '1px solid black',
                    margin: 'auto',
                    overflow: 'scroll',
                    margin: '10px'
                }}
            >
                {this.state.lines}
                <div style={{ flexBasis: '20px', height: '20px', minHeight: '20px' }} />
            </div>
        )
    }
}

export default Terminal