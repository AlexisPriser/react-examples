import React, { useState } from 'react';

function funct() {
  //...
  //return()
}

const MyComponent = () =>{
  const js_text="js text"
  const [myState,setMyState]=useState("state")
  return(
    <div>
      <div>my js text:{js_text}</div>
      <div>my state:{myState}</div>
      <button onClick={()=>{setMyState("changed")}}>click me</button>
    </div>
  )
}

export default MyComponent