const { default: styled } = require("styled-components");

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 30px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`

export const Item = styled.li`
  width: 100%;
  height: 520px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); 
`

export const Img = styled.img`
  width: 100%;
  height: 460px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
     transform: scale(1.03);
     cursor: zoom-in;
  }
`
export const Title = styled.p`
font-size: 18px;
font-weight: 700;
color: black;
list-style: none;
text-align: center;
margin-top: 20px;
`