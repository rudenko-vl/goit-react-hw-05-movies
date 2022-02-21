import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
display: flex;
justify-content: center;
background-color: white;
position: fixed;
top: 0;
z-index: 100;
padding: 10px;
width: 100%;
/* border-bottom: 1px solid black; */
box-shadow: 3px 2px 3px 2px rgba(0, 0, 0, 0.2);
`

export const Nav = styled.nav`
width: 500px;
display: flex;
justify-content: space-between;
`
export const Link = styled(NavLink)`
font-size: 28px;
font-weight: 700;
color: green;
transition: transform 700ms cubic-bezier(0.4, 0, 0.2, 1);
:hover {
     transform: scale(1.2);
  }

&.active {
    color: tomato;
  }
`