import React, { Component } from 'react'
import { TweenLite, Power0 } from 'gsap'
import Terminal from './terminal'

class Splash extends Component {
    constructor(props) {
        super(props)
        this.shadowRef1 = null
        this.shadowRef2 = null
        this.shadowRef3 = null
    }

    componentDidMount() {
        const a = () => {
            TweenLite.to(
                this.shadowRef1,
                0,
                {
                    top: '0',
                    opacity: '1'
                }
            )
            TweenLite.to(
                this.shadowRef1,
                3,
                {
                    top: '5vh',
                    opacity: '0',
                    onComplete: a
                }
            )
        }
        a()
    }

    render() {
        return (
            <>
                <div
                    style={{
                        width: '100vw',
                        height: '62.5vh',
                        backgroundColor: 'rgba(40, 37, 46, 1)',
                        clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)',
                        position: 'absolute',
                        top: '0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <h1
                        style={{
                            color: 'white',
                            margin: '0',
                            fontFamily: "'Roboto Mono', monospace",
                            fontWeight: 'bolder',
                            fontSize: '500%'
                        }}
                    >
                        Hi, I'm Alex Bruns
                    </h1>
                </div>
                <div
                    style={{
                        width: '100vw',
                        height: '62.5vh',
                        backgroundColor: 'rgba(40, 37, 46, 0.5)',
                        clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)',
                        position: 'absolute',
                        top: '0',
                        zIndex: '-1'
                    }}
                    ref={div => this.shadowRef1 = div}
                >
                </div>
                <div
                    style={{
                        width: '100vw',
                        height: '62.5vh',
                        position: 'absolute',
                        top: '0',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    }}
                >
                    <button
                        style={{
                            margin: '17vh',
                            padding: '10px',
                            border: 'none',
                            borderRadius: '0',
                            fontSize: '150%',
                            fontFamily: "'Roboto Mono', monospace",
                        }}
                    >
                        Download My Résumé!
                    </button>
                </div>
                <div
                    style={{
                        top: '62.5vh',
                        position: 'absolute',
                        paddingTop: '5vh',
                        paddingBottom: '5vh',
                        width: '100%'
                    }}
                >
                    <Terminal />
                </div>
            </>
        )
    }
}

export default Splash