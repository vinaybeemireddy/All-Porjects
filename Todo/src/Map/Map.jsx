import React from 'react'

const Map = () => {

    let array=[
        {
            name:"goku",
            age:12,
            place:"mum"
        },
        {
            name:"gohan",
            age:24,
            place:"andhra"
        },
        {
            name:"vegita",
            age:43,
            place:"tel"
        },
        {
            name:"picalo",
            age:125,
            place:"del"
        }
    ]
  return (
    <ul>
      { array.map(function(element,index){
       return  <li key={index}>{index}. {element.name} {element.age}</li>
       }) }
    </ul>
  )
}

export default Map