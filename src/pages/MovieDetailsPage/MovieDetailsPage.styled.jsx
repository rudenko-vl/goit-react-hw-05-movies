import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const List = styled.ul`
display: flex;
justify-content: space-between;
width: 600px;
margin-bottom: 30px;
`

export const LinkNav = styled(NavLink)`
display: inline-block;
text-align: center;
font-size: 26px;
font-weight: 700;
text-decoration: none;
color: green;
transition: all,.5s cubic-bezier(.4,0,.2,1);
:hover {
    transform: scale(1.2);
    color: tomato;
}

&.active {
    color: tomato;
  }
`
