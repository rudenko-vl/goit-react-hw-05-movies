import { Link } from 'react-router-dom';
const { default: styled } = require("styled-components");

export const MovieLink = styled(Link)`
  text-decoration: none;
`

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 30px;
  margin-top: 50px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`

export const Item = styled.li`
  background-color: #073631;
  width: 100%;
  height: 100%;
  padding: 7px;
  border-radius: 8px;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    :hover {
     transform: scale(1.03);
     cursor: pointer;
  } 
`

export const Img = styled.img`
  overflow: hidden;
  width: 100%;
  height: 460px;
  object-fit: cover;
`
export const Title = styled.p`
font-family: The Nautigal, cursive;
font-size: 20px;
font-weight: 700;
color: white;
list-style: none;
text-align: center;
margin-top: 20px;
`