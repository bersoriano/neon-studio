import React, {Component} from 'react';
import { styled } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

import CustomizerContext from './CustomizerContext';

const CustomInput = styled(TextField)({
    padding: "10px 20px",
    "box-sizing": "border-box;",
    "border-radius": "5px;",
    "box-shadow": "0px 0px 7px 1px #cecece;",
    "margin": "15px 0 15px 0"
});

class Input extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            userText: ""
        }
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange (event) {
        console.log("Typing: " + event.target.value);
    }   

    render() {
        return (
            <CustomizerContext.Consumer>
                {
                    context => (
                        <CustomInput
                            id="standard-name"
                            placeholder="Start typing here..."
                            label=""
                            className="myClass"
                            fullWidth
                            onChange={(event) => {context.updateText(event.target.value);this.handleTextChange(event)}}
                            InputLabelProps={{
                            shrink: true,
                            }}                        
                        >
                        </CustomInput> 
                    )
                }
            </CustomizerContext.Consumer>            
        );
    }
}

export default Input;