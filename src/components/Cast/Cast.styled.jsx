import styled from "styled-components";
import {Link} from 'react-router-dom';

export const List = styled.ul`
padding: 30px;
display: flex;
flex-wrap: wrap;
margin-top: -30px;
margin-left: -30px;
`

export const Item = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #073631;
margin-top: 30px;
margin-left: 30px;
flex-basis: calc(100% / 6 - 30px);
border: 3px solid #7CA18B;
`
export const Img = styled.img`
width: 100%;
`
export const Title = styled.p`
font-size: 18px;
font-weight: 500;
font-family: The Nautigal, cursive;
color: white;
list-style: none;
text-align: center;
`

export const HideBtn = styled(Link)`
padding: 5px;
color: white;
background-color: #E957F9;
border-radius: 5px;
text-decoration: none;
:hover {
background-color: #D43D51;
box-shadow: 4px 4px 6px #796A7A;
}
`