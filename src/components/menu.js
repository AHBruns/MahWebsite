import React, { Component } from 'react'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaying: false
        }
    }

    render() {
        return (
            <>
                {
                    this.state.displaying
                    ?
                        <div
                            style={{
                                position: 'fixed',
                                top: '20px',
                                left: '20px',
                                zIndex: '1',
                                boxShadow: '0 1rem 3rem rgba(0,0,0,.35)',
                                backgroundColor: 'white',
                                padding: '10px',
                                minWidth: '200px',
                                borderRadius: '10px'

                            }}
                        >
                            <h1
                                style={{
                                    margin: '0',
                                    fontFamily: "'Roboto Mono', monospace",
                                }}
                            >
                                Menu
                            </h1>
                            <hr
                                    style={{
                                        flex: '1',
                                        border: 'none',
                                        borderBottom: '3px solid black'
                                    }}
                                />
                            <div
                                style={{
                                    display: 'flex',
                                }}
                            >
                                <p
                                    style={{
                                        margin: '0',
                                        fontFamily: "'Roboto Mono', monospace",

                                    }}
                                >
                                    GitHub
                                </p>
                                <div style={{ flexBasis: '10px' }} />
                                <hr
                                    style={{
                                        flex: '1',
                                        border: 'none',
                                        borderBottom: '1px solid black'
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                }}
                            >
                                <p
                                    style={{
                                        margin: '0',
                                        fontFamily: "'Roboto Mono', monospace",

                                    }}
                                >
                                    Twitter
                                </p>
                                <div style={{ flexBasis: '10px' }} />
                                <hr
                                    style={{
                                        flex: '1',
                                        border: 'none',
                                        borderBottom: '1px solid black'
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                }}
                            >
                                <p
                                    style={{
                                        margin: '0',
                                        fontFamily: "'Roboto Mono', monospace",

                                    }}
                                >
                                    Contact Me
                                </p>
                                <div style={{ flexBasis: '10px' }} />
                                <hr
                                    style={{
                                        flex: '1',
                                        border: 'none',
                                        borderBottom: '1px solid black'
                                    }}
                                />
                            </div>
                            <div style={{ height: '15px' }} />
                            <div
                                style={{
                                    margin: '0',
                                    cursor: 'pointer',
                                    position: 'absolute',
                                    bottom: '0',
                                    right: '50%',
                                    transform: 'translate(50%, 50%)',
                                    width: '30px',
                                    height: '30px',
                                    backgroundColor: 'white',
                                    boxShadow: '0 .5rem 1rem rgba(0,0,0,0.35), 0 0 0 2px white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    transition: 'all 0.1s ease',
                                    border: '2px solid black'
                                }}
                                onClick={() => this.setState({displaying: false})}
                                className='menu-exit-div'
                            >
                                <strong>&times;</strong>
                            </div>

                        </div>
                    :
                        <div
                            style={{
                                position: 'fixed',
                                left: '20px',
                                width: '40px',
                                height: '60px',
                                zIndex: '1',
                                cursor: 'pointer',
                                backgroundColor: 'white',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                                borderTopRightRadius: '0',
                                borderTopLeftRadius: '0',
                                boxShadow: '0 .25rem 1rem rgba(0,0,0,0.35)',
                                transition: 'transform 0.3s ease'
                            }}
                            onClick={() => this.setState({displaying: true})}
                            className='menu-open-div'
                        >
                            <p
                                style={{
                                    color: 'rgba(40, 37, 46, 1)',
                                    fontSize: '125%',
                                    margin: '0',
                                    textAlign: 'center',
                                    paddingBottom: '10px'
                                }}
                            >
                                &#9776;
                            </p>
                        </div>
                }
            </>
        )
    }
}

export default Menu