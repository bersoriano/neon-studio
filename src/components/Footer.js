import React from 'react';
import styled from 'styled-components';

import OrderButton from './buttons/OrderButton';

const FooterWrapper = styled.div`
    text-shadow: 0px 0px 11px white;
    display: flex;
    flex-direction: row;
    padding: 10px 0;
`;

const Flexible = styled.div`
    display: flex;
    flex: 1;
`;

const PriceLabel = styled.span`
    margin: 13px 0;
    font-weight: 600;
    font-size: 18px;
`;

function footer () {
    return (
        <FooterWrapper>
            <Flexible></Flexible>
            <OrderButton></OrderButton>
        </FooterWrapper>
    )
}

export default footer;