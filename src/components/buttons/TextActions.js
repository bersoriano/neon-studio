import React from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';


const FontButton = styled(Button)({
    color: '#efefef',
    border: '3px solid #e5e5e5',
    height: '30px',
    margin: '0 8px 0 0',
    padding: '0 15px',
    background: 'transparent',
    'border-radius': '20px',
    'letter-spacing': '1px',
    'font-size': '12px',
    margin: '0 auto'
});

export default function FontActions (props){
    return (
        <FontButton onClick={props.action}>{props.label}</FontButton>
    );
};