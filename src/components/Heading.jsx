import React from 'react'

const Heading = (props) => {
    let text = "";
    let heading = props.children;
    heading.split(" ").map( word =>{
      if(word.includes("#")){
        let some = word.split("")
        some.shift()
        some.pop()
        if(heading.split(" ")[heading.split(" ").length-1] !== some.join("")){
          if(some[some.length-1]!=="."){
            some.push(" ")
          }
        }
        some = some.join("")
        const capitalizer = (x) =>{
          return x.charAt(0).toUpperCase()+x.slice(1)
        }
        text = text + capitalizer(some)
      }else{
        if(heading.split(" ")[heading.split(" ").length-1] !== word){
          text = text + word+ " ";
        }
        else{
          text = text + word;
        }
      }
    })
  return (
    <>
    <props.as className = {props.className}>{text}</props.as>
    </>
  )
}

export default Heading