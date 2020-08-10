import React from 'react'

function RemoveCommas(string) {
    /* numChar=string.length
    for(let i=0;i<=numChar;i++){
        if(string.charAt(i)==","){}

    }
    return ( */
    string= string.replace(/,/g,'')
    return string
}

export default RemoveCommas
