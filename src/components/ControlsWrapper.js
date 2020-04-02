import React from 'react';
import styled from 'styled-components';

const ControlsWrapper = styled.div`
    padding: 20px;
    border-radius: 5px;
    border: 1px solid gray;
    background-color: #3a5192;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    bottom: 0; 
`;

function Wrapper (props) {
    return (
        <ControlsWrapper>
            {props.children}
        </ControlsWrapper>
    )
}

export default Wrapper;