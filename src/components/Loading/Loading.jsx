import React from 'react';
import ReactLoading from 'react-loading';
import { Wrapper } from "./Loading.styled";

const Loading = () => (
    <Wrapper>
        <ReactLoading type="spokes" color="#041224" height={'5%'} width={'5%'} />
    </Wrapper>
);
 
export default Loading;