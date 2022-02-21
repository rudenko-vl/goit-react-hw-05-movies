import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
padding: 5px;
outline: 2px solid #9AB6B3;
border-radius: 10px;
margin-top: 60px;
margin-bottom: 40px;

`
export const Img = styled.img`
width: 50%;
height:700px;
object-fit: cover;
`
export const WrapInfo = styled.div`
width:50%;
padding: 20px;
`
export const MovieTitle = styled.h2`
color: blue;
margin-top: 20px;
margin-bottom: 20px;
`
export const Span = styled.span`
color: rebeccapurple;
`
export const GoBackBtn = styled(Link)`
padding: 5px;
color: white;
font-weight: 600;
background-color: #E957F9;
border-radius: 5px;
text-decoration: none;
transition: all,.5s cubic-bezier(.4,0,.2,1);
:hover {
background-color: #D43D51;
box-shadow: 4px 4px 6px #796A7A;
}
`
export const Text = styled.span`
font-family: The Nautigal, cursive;
font-size: 18px;
font-weight: 500;
`
export const Title = styled.h2`
color: rebeccapurple;
margin-bottom: 10px;
`
export const SpanScore = styled.span`
color: blue;
`
export const ItemGenres = styled.li`
font-family: The Nautigal, cursive;
font-size: 18px;
font-weight: 500;
`