import React, { Component } from 'react'
import { TweenLite, Power0 } from 'gsap'
import Terminal from './terminal'

class Splash extends Component {
    constructor(props) {
        super(props)
        this.shadowRef1 = null
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
                        // backgroundColor: 'rgba(255, 161, 66, 1)',
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
                            fontSize: '500%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            textAlign: 'center'
                        }}
                    >
                        Hi, I'm Alex Bruns
                        <button
                        style={{
                            margin: '2vh',
                            padding: '10px',
                            border: 'none',
                            borderRadius: '0',
                            fontSize: '30%',
                            fontFamily: "'Roboto Mono', monospace",
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        className='resume-button'
                        onClick={() => {
                            fetch('/AlexBrunsResume.pdf')
                                .then(resp => resp.blob())
                                .then(blob => {
                                    const url = window.URL.createObjectURL(blob);
                                    const a = document.createElement('a');
                                    a.style.display = 'none';
                                    a.href = url;
                                    a.download = 'AlexBrunsResume.pdf';
                                    document.body.appendChild(a);
                                    a.click();
                                    window.URL.revokeObjectURL(url);
                                })
                        }}
                    >
                        Download My Résumé!
                    </button>
                    </h1>
                </div>
                <div
                    style={{
                        width: '100vw',
                        height: '62.5vh',
                        backgroundColor: 'rgba(40, 37, 46, 0.5)',
                        // backgroundColor: 'rgb(255, 161, 66, 0.5)',
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
                        top: '62.5vh',
                        position: 'absolute',
                        paddingTop: '5vh',
                        paddingBottom: '0vh',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Terminal />
                    <div style={{ height: '5vh' }} />
                    <div
                    style={{
                        height: '75vh',
                        width: '100%',
                        backgroundColor: 'rgba(40, 37, 46, 1)',
                        clipPath: 'polygon(0 25%, 100% 0, 100% 100%, 0 100%)',
                        paddingTop: '25vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        
                    }}
                >
                    <div style={{ flexBasis: '20px'}} />
                    <h1
                        style={{
                                color: 'white',
                                fontFamily: "'Roboto Mono', monospace",
                                fontWeight: 'bolder',
                        }}
                    >
                        What can this guy do?
                    </h1>
                    <div
                        style={{
                            backgroundColor: 'white',
                            fontFamily: "'Roboto Mono', monospace",
                            fontWeight: 'lighter',
                            fontSize: '150%',
                            maxWidth: '1000px',
                            padding: '20px',
                            textAlign: 'justify',
                            borderRadius: '20px',
                            margin: '0 10px',
                            boxShadow: '0 1rem 3rem rgba(0,0,0,.35)',
                        }}
                    >
                        I program a lot. So, instead of an itemized list of all the programming languages I've written meaningful code in, I built this thingy. Additionally, if you're into that itemized list style you can download a spec sheet for me <a>here</a>. 
                    </div>
                </div>
                </div>
            </>
        )
    }
}

export default Splash