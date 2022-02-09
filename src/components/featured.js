import React from 'react'
import './featured.css'
import {Button} from './Button';


function Featured() {
    return (
        <div>
            {/* Harsh */}
            <section className="feature" id="featured">

               

                <div className="row">
                
                    <div className="image-container">

                        <div className="big-image">
                            <img src="/images/img-9.webp" alt="picture" />
                        </div>

                        <div className="small-image">
                            <img className="image-active" src="/images/img-10.webp" alt="picture" />
                            <img src="/images/img-11.webp" alt="picture" />
                            <img src="/images/img-12.webp" alt="picture" />
                         
                        </div>

                    </div>

                    <div className="content">

                        <h3>Deal Of The Day</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, at!</p>
                        <strong className="price">₹999 <span>₹1299</span> </strong>
                        <div className='featured-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         ADD TO CART
        </Button>
        </div>
                      </div>
                    </div>
                   

            </section>
        </div>
        
    )
}

export default Featured
