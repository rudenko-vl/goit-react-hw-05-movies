import styled from "styled-components";

export const Form = styled.form`
margin-top: 50px;
`
export const Input = styled.input`
  display: inline-block;
  width: 400px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`
export const BtnForm = styled.button`
  height: 30px;
  width: 70px;
  margin-left: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: #ffffff;
  cursor: pointer;
  color: black;
  font-weight: 500;
  font-size: 14px;
  transition-property: color, background-color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover{
    background: #1bbde6;
    color: white;
  }
`