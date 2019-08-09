import React from 'react';
import './App.css';

import CustomizerProvider from './components/CustomizerProvider';

import ThemeProvider from 'styled-components';
import theme from 'styled-theming';

import Header from './components/Header'
import Preview from './components/Preview';
import Input from './components/Input';

import TextEffects from './components/TextEffects';
import Label from './components/Label';
import ColorSelector from './components/ColorSelector';
import AppWrapper from './components/AppWrapper';
import Footer from './components/Footer';

function App() {

  const themec = {
    background: '#24272f',
    foreground: '#e2e2e2'
}

  const colors = [
    {
      color: "red",
      code: "#ff7777"
    },
    {
      color: "blue",
      code: "#7977ff"
    },
    {
      color: "green",
      code: "#77ff94"
    }, 
    {
      color: "yellow",
      code: "#fffb77"
    },
    {
      color: "pink",
      code: "#ff77f5"
    },
    {
      color: "orange",
      code: "#ffcf77"
    },
    {
      color: "white",
      code: "#ffffff"
    },                 
  ];
  
  return (
      <CustomizerProvider>
          <Header></Header>
          <AppWrapper>
            <div className="App">
              <Preview></Preview>
              <ColorSelector colorList= {colors}></ColorSelector>
              <Input></Input>
              <TextEffects></TextEffects>
              <Footer></Footer>
            </div> 
          </AppWrapper>         
      </CustomizerProvider>

  );
}

export default App;
