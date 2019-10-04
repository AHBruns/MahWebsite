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
                                position: 'absolute',
                                top: '20px',
                                left: '20px',
                                zIndex: '1',
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                padding: '10px',
                                minWidth: '200px',
                                borderRadius: '10px'
                            }}
                        >
                            <p>blah</p>
                            <p>blah</p>
                            <p>blah</p>
                            <p>blah</p>
                            <p>blah</p>
                            <div
                                style={{
                                    margin: '0',
                                    cursor: 'pointer'
                                }}
                            >
                                &times;
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
                                borderTopLeftRadius: '0'
                            }}
                            onClick={() => this.setState({displaying: true})}
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