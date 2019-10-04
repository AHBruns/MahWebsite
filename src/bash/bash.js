import React from 'react'

export function bash(cmd, context, lines) {
    let output = [];
    let outputLines = lines;
    let newContext = context;
    if (newContext == null) {
        newContext = {
            state: {},
        }
    }
    cmd = cmd.trim()
    switch (cmd) {
        case "help":
            output = help()
            break
        case "clear":
            outputLines = []
            break
        default:
            output = [<><br/>sh: {cmd}: not found<br/><br/></>]
    }
    return [output, newContext, outputLines]
}

// built-ins

const help = () => {
    const output = [
        <>
        <br/>Welcome! This is a pared down bash shell. I haven't implement the ENTIRE Bash and POSIX 1003.1 specifications, 
        but I have flushed out the important bits. At least, I hope there's enough here for you to play around 
        with for a bit. If you'd like to learn more about me and my work, I've built in a few routines that 
        have some more info about yours truly:<br/><br/>- background<br/>- education<br/>- career<br/>- technical<br/>- hobbies<br/>
        - links<br/>- turtles<br/><br/>Also, your friend, the man function, is implemented in this shell! So, you can can call man 
        on any of these functions to learn about their contents and paramaterization.<br/><br/>e.g. `man 
        technical`<br/><br/>
        </>
    ]
    return output
}