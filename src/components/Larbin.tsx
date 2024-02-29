import React, { useState, useEffect } from 'react';
import img_larbin from '../images/img_larbin.png'
import Wrapper from './Wrapper';
interface LarbinTypes {
  obey: (argent:number)=>void;
  name: String;
}
const Larbin=({obey ,name}:LarbinTypes)=> {
    const [Argent, setArgent] = useState(0);
    const handleSubmit=(e:any)=>{
      e.preventDefault();
      obey(Argent)
      console.log("e",e)
    }
    const handleChange=(e:any)=>{
      e.preventDefault();
      const value=e.target.value as number;
      setArgent(value)
      console.log("change",value)
    }
    return (
      <Wrapper>
        <div>{name}</div>
        <img src={img_larbin} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <label>
            Recolte:
            <input type="number" value={Argent} onChange={(e)=>handleChange(e)}/>
          </label>
          <input type="submit" value="Obey"/>
        </form>
      </Wrapper>
    );
  }
export default Larbin;