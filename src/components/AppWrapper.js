import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
    background-color: #24272f;
    height: 100vh;
`;

function Wrapper (props) {
    return (
        <AppWrapper>
            {props.children}
        </AppWrapper>
    )
}

export default Wrapper;