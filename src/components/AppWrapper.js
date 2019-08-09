import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
    padding: 0 20px;
    background-color: #24272f;
    border-radius: 15px 15px 0 0px;
    height: 97vh;
`;

function Wrapper (props) {
    return (
        <AppWrapper>
            {props.children}
        </AppWrapper>
    )
}

export default Wrapper;