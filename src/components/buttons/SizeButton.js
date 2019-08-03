import React from 'react';
import { styled } from '@material-ui/styles';
import Container from '@material-ui/core/Container'; 
import Button from '@material-ui/core/Button';

const Wrapper = styled(Container)({
    display: 'inline-block',
    padding: 0
});

const SizeButton = styled(Button)({
    height: '40px',
    margin: '0 5px 5px',
    padding: '0 20px',
    background: 'transparent',
    color: '#1f1f1f',
    border: '1px solid #e2e2e2',
    'box-shadow': 'none',
    'border-radius': '3px',
    'letter-spacing': '1px',
});

export default function SizeButtons() {
  return (
    <Wrapper>
        <SizeButton>Small</SizeButton>
        <SizeButton>Medium</SizeButton>
        <SizeButton>Large</SizeButton>
    </Wrapper>
  )
}