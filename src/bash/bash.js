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
    let s = cmd.trim()
    cmd = s.split(" ")[0]
    switch (cmd) {
        case "help":
            output = help()
            break
        case "clear":
            outputLines = []
            break
        case "man":
            output = man(s.split(" "))
            break
        default:
            output = [<><br/>sh: {cmd}: not found<br/><br/></>]
    }
    return [output, newContext, outputLines]
}

// built-ins

const man = args => {
    let output = []
    if (args.length == 1) {
        return [<><br/>What manual page do you want?<br/><br/></>]
    }
    switch (args[1]) {
        case "help": 
            output = [
                <>
                <br/>
                <strong>NAME</strong>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>help</strong> - gives general info about the shell
                <br/>
                <br/>
                <strong>SYNOPSIS</strong>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>help</strong> [<strong>-b</strong> <u>background</u>] [
                    <strong>-e</strong> <u>education</u>] [<strong>-c</strong> <u>career</u>] [<strong>-t</strong> <u>technical</u>] ...
                <br/>
                <br/>
                <strong>DESCRIPTION</strong>
                <br/>
                <br/>
                <strong>OPTIONS</strong>
                
                <br/>
                <br/>
                </>
            ]
            break
        default:
            output = [<><br/>no manual entry for `{args[1]}`<br/><br/></>]
    }
    return output
} 

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