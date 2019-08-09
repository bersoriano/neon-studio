import React from 'react';
import styled from 'styled-components';

import Label from '../components/Label';
import Canvas from '../components/Canvas';

import CustomizerContext from './CustomizerContext';

const Header = styled.div`
    display: flex;
`;

const Flexible = styled.div`
    flex: 1;
`;

function Preview (props) {
    return (
        <CustomizerContext.Consumer>
            {
                context => (
                    <React.Fragment>
                        <Header>
                            <Flexible></Flexible>
                        </Header>
                        <Canvas canvasText = {props.canvasText}></Canvas>
                    </React.Fragment>
                )
            }
        </CustomizerContext.Consumer>
    ); 
}

export default Preview;