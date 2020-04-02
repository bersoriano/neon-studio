import React, {Component} from 'react';
import CustomizerContext from './CustomizerContext';

class CustomizerProvider extends Component {
    state = {
        config: {
            userText:'Sample text',
            selectedColor: '#ff7777',
            textSize: '40',
            fontFam: `'Fredericka the Great', cursive`,
            textRotation: '0',
            background: '#24272f'
        }
    }

    render() {
        return (
            <CustomizerContext.Provider
                value={{
                    fontFam: this.state.config.fontFam,
                    updateFont: () => {
                        const config = Object.assign({},this.state.config);
                        config.fontFam === `'Fredericka the Great', cursive` ? 
                        config.fontFam = 'Dancing Script': 
                        config.fontFam = `'Fredericka the Great', cursive`;
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
                    background: this.state.config.background,
                    updateBackground: () => {
                        debugger;
                        const config = Object.assign({},this.state.config);
                        switch(config){
                            case config.background === '#24272f':
                            config.background = "#f650fd"
                            case config.background === "#f650fd":
                            config.background = "#24272f" 
                        }
                        this.setState({config});
                        console.log("Update background");
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