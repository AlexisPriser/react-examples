import React from "react"
import Maitre from "./Maitre"
import img_dark_cave from "../images/img_dark_cave.png"
import styled from "styled-components"
const Donjon=()=>{

    return(<Cave><Maitre/></Cave>)
}
const Cave = styled.div`
    height: 100vh;
    background-size: contain;
    background-image: url(${img_dark_cave});
`;
export default Donjon