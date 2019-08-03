import React from 'react';
import styled from 'styled-components';

import Label from '../components/Label';
import Canvas from '../components/Canvas';
import TextActions from '../components/buttons/TextActions';

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
                            <Label text="Preview"></Label>
                            <Flexible></Flexible>
                            <TextActions
                                action={() => context.updateFont()} 
                                label={context.fontFam}></TextActions>                            
                            <TextActions 
                                action={(event) => context.updateTextSize(event)}
                                label="A+">
                            </TextActions>
                        </Header>
                        <Canvas canvasText = {props.canvasText}></Canvas>
                    </React.Fragment>
                )
            }
        </CustomizerContext.Consumer>
    ); 
}

export default Preview;