import React from 'react';
import './productpage.css';
import DetailsThumb from './DetailsThumb';

class ProductPage extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "Marvel: Comic Iron-Man",
        "src": [
            "images/18 hanger design.jpg",
            "images/18th folded tshirt.jpg",
            "images/18th f&b2.jpg",
            "images/3rd hanger SIZE.jpg",
          ],
        "description": "T-shirts",
        "category": "By Marvel",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 2300,
        "colors":["red","black","crimson","teal"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <p>{item.category}</p>
                 
                </div>

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <span>${item.price}</span>

                <button className="cart">Add to cart</button>

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default ProductPage;
