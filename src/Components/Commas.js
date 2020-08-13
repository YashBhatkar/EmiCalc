import React from 'react'

function Commas(string) {
    string=string+""
    const numChar= string.length
    let tracker=numChar
    if (numChar<=3){
        return string
    }
    else{
        tracker=tracker-3
      string= insert(string,(tracker))
        tracker=tracker-3
      while(tracker>0){
        string= insert(string,(tracker))
        tracker=tracker-3

      }
      
      return string  
    }
    
}

function insert(string, index){
    if (index > 0)
  {
    return string.substring(0, index) + "," + string.substring(index, string.length);
  }
  return string+",";

}

export default Commas
