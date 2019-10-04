import React, { Component } from 'react'

class BashLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            fixed: this.props.fixed ? true : false,
            content: this.props.content
        }
        // console.log(this.state)

    }

    componentWillUnmount() {
        // console.log('unmounting')
    }

    render() {
        return (
            <>
                {
                    this.state.fixed
                    ?
                    <div
                        style={{
                            width: '1000px',
                            maxWidth: 'calc(100% - 20px)',
                            display: 'flex',
                            fontSize: '20px',
                            fontFamily: "'Roboto Mono', monospace"
                        }}
                        className="repl-line-container"
                    >
                        <p
                            style={{
                                margin: '0'
                            }}
                        >
                            {!this.props.isOutput && <strong>$</strong>} {this.state.content}
                        </p>
                    </div>
                    :
                    <div
                        style={{
                            width: '1000px',
                            maxWidth: 'calc(100% - 20px)',
                            display: 'flex',
                            fontSize: '20px',
                            fontFamily: "'Roboto Mono', monospace"
                        }}
                        className="repl-line-container"
                    >
                        <p
                            style={{
                                margin: '0'
                            }}
                        >
                            <strong>$</strong>&nbsp;
                        </p>
                        <input
                            style={{
                                flex: '1',
                                border: 'none',
                                background: 'none',
                                fontSize: '20px',
                                fontFamily: "'Roboto Mono', monospace",
                                padding: '0',
                                borderBottom: '1px solid rgba(40, 37, 46, 1)',
                                paddingBottom: '5px'
                            }}
                            placeholder={this.props.placeholder}
                            autoFocus={true}
                            type='text'
                            onChange={e => {
                                const s = e.target.value
                                this.setState({value: s})
                            }}
                            onKeyUp={e => {
                                if (e.keyCode == 13) {
                                    this.setState(state => {
                                        console.log('1')
                                        return {
                                            ...state,
                                            content: state.value,
                                            fixed: true
                                        }
                                    })
                                    this.props.handler(this.state.value)
                                }
                            }}
                            value={this.state.value}
                        />
                    </div>
                }
            </>
        )
    }
}

export default BashLine