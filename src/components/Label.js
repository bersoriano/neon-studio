import React from 'react';
import styled from 'styled-components';

const Label = styled.span`
    margin: 10px 0;
    display: block;
    text-align: left;
    letter-spacing: .5px;
`;

function header (props) {
    return (
        <Label>{props.text}</Label>
    )
}

export default header;