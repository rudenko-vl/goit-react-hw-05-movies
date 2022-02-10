import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
display: flex;
`
export const Link = styled(NavLink)`
font-size: 24px;
font-weight: 700;
list-style: none;
color: green;

&.active {
    color: tomato;
  }
  :not(:last-child) {
      margin-right: 50px;
  }

`