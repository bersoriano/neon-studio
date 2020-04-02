import React from 'react';
import styled from 'styled-components';

import TextActions from './buttons/TextActions';
import CustomizerContext from './CustomizerContext';

const EffectsWrapper = styled.div`
    text-shadow: 0px 0px 11px white;
    display: flex;
    flex-direction: row;
`;

const Flexible = styled.div`
    display: flex;
    flex: 1;
`;

function TextEffects () {
    return (
        <CustomizerContext.Consumer>
            {
                context => (
                    <EffectsWrapper>
                        <TextActions
                            action={() => context.updateFont()} 
                            label="Style">
                        </TextActions>                            
                        <TextActions 
                            action={() => context.updateTextSize()}
                            label="Size">
                        </TextActions>
                        <TextActions 
                            action={() => context.updateTextRotation()}
                            label="Rotate">
                        </TextActions>
                        <TextActions
                            action={()=> context.updateBackground()}
                            label="Bckg">
                        </TextActions>                        
                    </EffectsWrapper>                    
                )
            }
        </CustomizerContext.Consumer>
    )
}

export default TextEffects;