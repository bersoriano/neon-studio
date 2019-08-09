import React, {Component} from 'react';
import CustomizerContext from './CustomizerContext';

class CustomizerProvider extends Component {
    state = {
        config: {
            userText:'Sample text',
            selectedColor: '#ff7777',
            textSize: '40',
            fontFam: 'helvetica',
            'textRotation': '0'
        }
    }

    render() {
        return (
            <CustomizerContext.Provider
                value={{
                    fontFam: this.state.config.fontFam,
                    updateFont: () => {
                        debugger;
                        const config = Object.assign({},this.state.config);
                        config.fontFam === 'helvetica' ? 
                        config.fontFam = 'Dancing Script': 
                        config.fontFam = 'helvetica';
                        this.setState({config});
                    },
                    userText: this.state.config.userText,
                    updateText: newText => {
                        const config = Object.assign({},this.state.config);
                        config.userText = newText;
                        this.setState({config});
                    },
                    selectedColor: this.state.config.selectedColor,
                    updateColor: newColor => {
                        const config = Object.assign({},this.state.config);
                        config.selectedColor = newColor;
                        this.setState({config});
                    },
                    textSize: this.state.config.textSize,
                    updateTextSize: () => {
                        debugger;
                        const config = Object.assign({},this.state.config);
                        const biggerFont = parseInt(config.textSize) + 20;
                        if (biggerFont < 100) {
                            config.textSize =  biggerFont;
                            this.setState({config});
                        }
                        else {
                            config.textSize =  40;
                            this.setState({config});
                        }
                    },
                    textRotation: this.state.config.textRotation,
                    updateTextRotation: () => {
                        debugger;
                        const config = Object.assign({},this.state.config);
                        const rotatingText = parseInt(config.textRotation) + 30;
                        if (rotatingText < 360) {
                            config.textRotation = rotatingText;
                            this.setState({config});
                        }
                        else {
                            config.textRotation = 0;
                            this.setState({config});
                        }
                    },
                    reset: () => {
                        this.setState(this.state.config)
                    }
                }}
            >
                {this.props.children}
            </CustomizerContext.Provider>
        )
    }

}

export default CustomizerProvider;