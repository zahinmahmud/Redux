import React from "react";

//child component
function Greeting({name}){
  return  <h2>Hello ,  {name}</h2>
}

function  App(){
  return (
    <div>
      <Greeting name="Dipto"/>
      <Greeting name="Alex"/>
    </div>
  )
}

export default App;
