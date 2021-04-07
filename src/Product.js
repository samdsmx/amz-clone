import React from 'react';
import styled from 'styled-components';
import {db} from './firebase';

//function Product(props) {
function Product({title, price, rating, image, id}) {

    console.log("id:");
    console.log(id);

    const addToCart = () => {
        const cartItem = db.collection("cartItems").doc(id);
        cartItem.get().then((doc) => {
            if (doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {
                db.collection("cartItems").doc(id).set({
                    name: title,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }

        });

    }

    return (
        <Container>
            <Title>{title}</Title>
            <Price>${price}</Price>
            <Rating>
                {
                    Array(rating).fill().map(()=>'⭐')
                }
            </Rating>
            <Image src={image}></Image>
            <ActionSection>
                <AddtoCartButtom onClick={addToCart}>
                    Add to Cart
                </AddtoCartButtom>
            </ActionSection>
        </Container>
    )
}

export default Product; 

const Container = styled.div`
    background-color: white;
    z-index:100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    border-radius:40px;
    box-shadow: 5px 5px teal;
`;

const Title = styled.span``;

const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`;

const Rating = styled.div``;

const Image = styled.img`
    max-height:200px;
    object-fit: contain;
`;

const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;

`;

const AddtoCartButtom = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    cursor: pointer;
`;
