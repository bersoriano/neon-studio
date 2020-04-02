import React, {Component} from 'react';
import styled from 'styled-components';

import CustomizerContext from './CustomizerContext';

const ColorItem = styled.div`
    min-width: 30px;
    min-height: 30px;
    background-color: ${props => props.color};
    border-radius: 5px;
    margin-right: 8px;
    border: 3px solid #e5e5e5;
    margin: 0 auto;
`;

const ColorList =  styled.div`
    display: flex;
`;

function ColorWrapper (props) {

    function handleColorChange (event) {
        debugger;
    }
    
    return (
        <CustomizerContext.Consumer>
            {
                context => (
                    <ColorList>
                        {
                            props.colorList.map(element =>
                                <ColorItem
                                    color={element.code} 
                                    onClick={ () => {debugger; context.updateColor(element.code)}}>
                                </ColorItem>
                            )                
                        }
                    </ColorList>                    
                )
            }
        </CustomizerContext.Consumer>
    );
}

export default ColorWrapper;