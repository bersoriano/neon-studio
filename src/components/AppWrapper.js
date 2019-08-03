import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
    padding: 0 20px;
    @media (min-width: 600px) {
        max-width: 600px;
        margin: 0 auto;
    }
`;

function Wrapper (props) {
    return (
        <AppWrapper>
            {props.children}
        </AppWrapper>
    )
}

export default Wrapper;