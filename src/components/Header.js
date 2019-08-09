import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    color: #ffffff;
    text-shadow: 0px 0px 11px #40ffa7;
    ${'' /* background: linear-gradient(45deg,#40ffa7 30%,#afaafc 90%); */}
    padding: 12px 0;
    ${'' /* background-color: #f9ffe2;
    border-bottom: 3px solid #dcdcdc;
    margin-bottom: 5px; */}
    height: 3vh;    
    && h1 {
        font-family: helvetica;
        letter-spacing: 1px;
        font-size: 20px;
        margin: 0 20px;
        text-align: left;
        ${'' /* animation:blinkingText 3s infinite; */}
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
            <h1>NEON STUDIO</h1>
        </HeaderWrapper>
    )
}

export default header;