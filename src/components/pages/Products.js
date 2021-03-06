import React from 'react'
import product_card from "./product_data";
import './Product.css';
import {Link} from 'react-router-dom';

const Product = () => {
    console.log(product_card);
    const listItems = product_card.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn" >
                  <a><Link to="/Add to cart">Add to cart</Link></a>
                </div>
            </div>
        </div>

    );
    return (
        <div className="main_content">
            {listItems}
        </div>
    )
}
export default Product;
