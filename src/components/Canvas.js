import React, { Fragment } from 'react';
import styled from 'styled-components';

import CustomizerContext from './CustomizerContext';

const Canvas = styled.div`
    background-color: ${props => props.background};
    padding: 10vh 0;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
`;

const NeonText = styled.span`
    font-weight: 300;
    color: #ffffff;
    font-family: ${props => props.fontFam};
    font-size: ${props => props.textSize}px;
    transition: .3s;
    transform: rotate(${props => props.textRotation}deg);    
    text-shadow: 
    0 0 25px ${props => props.color}, 
    0 0 25px ${props => props.color}, 
    0 0 25px ${props => props.color},
    -5px -5px 25px ${props => props.color},
    5px 5px 25px ${props => props.color},
    5px -5px 25px ${props => props.color},
    -5px 5px 25px ${props => props.color};
`;

function canvas () {
    return (
        <CustomizerContext.Consumer>
            {
                context => (
                    <Fragment>
                        <Canvas background={context.background}>
                            <NeonText
                                textRotation ={context.textRotation}
                                fontFam={context.fontFam}
                                textSize={context.textSize} 
                                color={context.selectedColor}>
                                {context.userText}
                            </NeonText>
                        </Canvas>
                    </Fragment>
                )
            }
        </CustomizerContext.Consumer>
    )
}

export default canvas;