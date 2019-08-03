import React from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const OrderButton = styled(Button)({
  background: 'linear-gradient(45deg, #746bfe 30%, #53efff 90%)',
  background: '#f34d4d',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(121, 105, 255, 0.3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

export default function OrderButtons() {
  return <OrderButton>Order Now!</OrderButton>;
}