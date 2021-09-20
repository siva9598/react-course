import React,{useEffect, useState} from "react";
import Axios from "axios";
import { random,commerce } from "faker";
import { Container,Col,Row } from "reactstrap";
import CartItem from "./CartItem";
import { v4 } from "uuid";
const BuyPage = ({addInCart}) =>{
const apiKey = "INSERT_YOUR_KEY_HERE"

const [product,setProduct] = useState([]);
const url = "https://api.npoint.io/3060a0632cb130476c8b";
    const fetchPhotos = async() =>{
        const {data} = await Axios.get(url, {
            headers: {"Access-Control-Allow-Origin": "*"}});
    
    const {photos} = data;

    const allProduct = photos.map(photo => ({
        smallImage :photo.src.medium,
        tinyImage :photo.src.tiny,
        productName :random.word(),
        productPrice :commerce.price(),
        id : v4()
    }))
    setProduct(allProduct);
    };
    useEffect(()=>{
        fetchPhotos()
    },[]);

    return(
        <Container fluid >
            <h1 className="text-success text-center">
                Buy Page
            </h1>
            <Row>
                {product.map(product => (
                    <Col md = {4} key ={product.id} >
                        <CartItem product = {product} addInCart = {addInCart}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )

}
export default BuyPage