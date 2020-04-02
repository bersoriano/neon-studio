import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    color: #ffffff;
    text-shadow: 0px 0px 11px #40ffa7;
    padding: 12px 0;
    height: 3vh;
    background-color: #24272f;
    position: absolute;
    width: 100%;
    && h1 {
        font-family: helvetica;
        letter-spacing: 1px;
        font-size: 20px;
        margin: 0 20px;
        text-align: center;
        animation:blinkingText 3s infinite;
    }    
@keyframes blinkingText {
	0%{
        color: #ffffff;
        text-shadow: 0px 0px 11px #ffffff;
    }
	25%{
        color: #afaafc;
        text-shadow: 0px 0px 11px #afaafc;
    }
	50%{
        color: #afaafc;
        text-shadow: 0px 0px 11px #afaafc;
    }
	75%{
        color: #ffffff;
        text-shadow: 0px 0px 11px #ffffff;
    }
	100%{
        color: #ffffff;
        text-shadow: 0px 0px 11px #ffffff;        
    }
}

`;

function header () {
    return (
        <HeaderWrapper>
            <h1>NEON MACHINE</h1>
        </HeaderWrapper>
    )
}

export default header;