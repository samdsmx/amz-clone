import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';

function CartTotal({cartItems}) {

    const getTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.product.price * item.product.quantity;
        });
        return total;
    }

    const getCount = () => {
        let count =0;
        cartItems.forEach((item) => {
            count += item.product.quantity;
        });
        return count;
    }

    return (
        <Container>
            <Subtotal>Subtotal ({getCount()} items):{' '}  
                <NumberFormat value={getTotal()} displayType={'text'} 
                    thousandSeparator={true} prefix={'$'} />
            </Subtotal>
            <CheckoutButton>Proceed to checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal;

const Container = styled.div`
    flex: 0.3;
    padding: 20px;
    background-color: white;
`;

const Subtotal = styled.h2`
    margin-bottom: 16px;
`;

const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    padding: 4px 8px;
    border: 2px solid;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background: #ddb347;
    }
`;
