import React from 'react';
import './App.css';

import CustomizerProvider from './components/CustomizerProvider';

import Header from './components/Header'
import Preview from './components/Preview';
import Input from './components/Input';

import TextActions from './components/buttons/TextActions';
import Label from './components/Label';
import ColorSelector from './components/ColorSelector';
import SizeButtons from './components/buttons/SizeButton';
import AppWrapper from './components/AppWrapper';
import Footer from './components/Footer';

function App() {

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
          <Input></Input>
          <ColorSelector colorList= {colors}></ColorSelector>
          <Label text="Frame size"></Label>
          <SizeButtons></SizeButtons>
          <Footer></Footer>
        </div> 
      </AppWrapper>     
    </CustomizerProvider>
  );
}

export default App;
