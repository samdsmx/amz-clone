import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from './Product';
import logo from './image.png';
import { db } from './firebase';

export default function Home(props) {
    
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        db.collection('products').onSnapshot((snapshot) => {
            let tempProducts = [];
            tempProducts = snapshot.docs.map((doc) => ({
                id: doc.id,
                product: doc.data(),
            }));
            setProducts(tempProducts);
        })
    }

    useEffect(()=>{
        console.log("Call products2");
        getProducts();
    }, []);

    console.log(products);

   

    return (
        <Container>
            <Banner></Banner>
            <Container2>
                <Content>
                        {
                            products.map((data)=>(
                                <Product 
                                    title={data.product.name}
                                    price={data.product.price}
                                    rating={data.product.raiting}
                                    image={data.product.image}
                                    id={data.id}
                                />   
                            ))
                        }
                                       
                </Content>

                <HeaderLogo2>
                    <img src={logo}/>
                </HeaderLogo2>
            </Container2>
        </Container>
    )
}

const Container2 = styled.div`
    display: flex;
    z-index:100;
    flex: 1;
`;

const Container = styled.div`
    // max-width: 1500px;
    margin 0 auto;
    position:relative;
`;

const Banner  = styled.div`
    background-image: url('https://image.freepik.com/free-vector/technology-banner-background-with-hexagonal-shapes-text-space_1017-22589.jpg');
    min-height: 700px;
    background-position: center;
    background-size: cover;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
`;

const Content = styled.div`
    padding-left: 10px
    padding-right: 10px;
    margin-top: -650px;
    margin-left:80px;
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
`;

const HeaderLogo2 = styled.div`
    img {
        width: 600px;
        margin-top:-600px; 
        margin-left:200px;
        mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,1));
    }
`;