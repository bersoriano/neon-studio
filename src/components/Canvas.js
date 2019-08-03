import React, { Fragment } from 'react';
import styled from 'styled-components';

import CustomizerContext from './CustomizerContext';

const Canvas = styled.div`
    background-color: #24272f;
    padding: 20px;
    min-height: 200px;
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
                        <Canvas>
                            <NeonText
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