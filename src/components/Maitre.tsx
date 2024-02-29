import React, { useState, useEffect } from 'react';
import Larbin from './Larbin';
import img_maitre from '../images/img_maitre.png';
import Wrapper from './Wrapper';
const Maitre=()=> {
    const [count, setCount] = useState(0);
    useEffect(()=>{console.log("count",count)},[count])
    const ordre=(argent:number)=>{
      const sum=count+Number(argent)
      setCount(sum)
    }
    return (
      <Wrapper>
        <img src={img_maitre} alt="Logo" />
        <p>argent du maitre: {count}</p>
        <Larbin obey={ordre} name="Riri"/>
        <Larbin obey={ordre} name="Fifi"/>
        <Larbin obey={ordre} name="Loulou"/>
      </Wrapper>
    );
  }
export default Maitre;