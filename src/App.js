
import React from "react";
import PropTypes from "prop-types";

function Food({name, picture, rating}){
  
  return (
    <div>
      <h2>I like love {name}</h2>

      <h4>{rating}/5.0</h4>
      
      <img src = {picture} alt = {name} />
    </div>
  );

}
const foodIlove = [
  {
    id:1,
    name: "donuts",
    image:"https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 4
  },
  {
    id: 2,
    name: "cakes",
  image: "https://en.wikipedia.org/wiki/Cake#/media/File:Pound_layer_cake.jpg",
  rating: 3
  }
]

function renderFood(dish){
  
  return <Food key = {dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating} />
}

Food.propTypes = { 
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired

};

function App() {
  return (
  <div>
    <h1>hello</h1>
    {foodIlove.map(renderFood)}

  </div>
  );
}
export default App;
