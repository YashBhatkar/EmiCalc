import React from 'react'

function DecimalCheck(string) {
    
let index=string.indexOf(".")


if(index==0){
    if(string.length==1){
        return ""
    }
    string=string.substring(1,string.length)
    return string
}
if(index==-1){
    return string
}
else{
    let lastHalf=string.substring(index+1,string.length)
    lastHalf= lastHalf.replace(/\./g,'')
    if(lastHalf.length>2){
    lastHalf=lastHalf.substring(0,2)
    }
    string=string.substring(0,index+1)+lastHalf
    return string
    
}
}


export default DecimalCheck
