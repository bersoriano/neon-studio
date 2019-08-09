import React from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';


const FontButton = styled(Button)({
    color: '#1f1f1f',
    border: '1px solid #e2e2e2',
    height: '30px',
    margin: '0 10px 0 0',
    padding: '0 15px',
    background: 'transparent',
    'border-radius': '20px',
    'letter-spacing': '1px',
    'font-size': '12px'
});

export default function FontActions (props){
    return (
        <FontButton onClick={props.action}>{props.label}</FontButton>
    );
};