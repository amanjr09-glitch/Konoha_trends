import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>CATEGORIES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-14.webp'
              label='Jackets'
              path='/services'
            />
            <CardItem
              src='images/img-12.webp'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='T-shirt'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-13.webp'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Dresses'
              path='/services'
            />
            <CardItem
              src='images/img-15.webp'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Marvel'
              path='/products'
            />
            <CardItem
              src='images/img-16.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Anime'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
