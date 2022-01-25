import React, { useState } from "react";
import { Ingredients, Recipe, RecipeThing } from "../models/recipe";
import HeartBlack from "../HeartBlack.png";
import HeartRedFilled from "../HeartRedFilled.png";

interface Prop {
  recipe: RecipeThing;
}

const Result = ({ recipe }: Prop) => {
  const [details, setDetails] = useState<boolean>(false);
  const [heart, setHeart ] = useState<string>(HeartBlack)

  console.log(recipe);
  console.log(recipe.label);
  return (
    <div className="Result" onClick={() => setDetails(true)}>
      <h2 id="Recipe-Name">{recipe.label}</h2>
      
      <img src={recipe.image} alt="Image of Tastey Dish" />
      <p>Done in <span id="Recipe-Time">{recipe.totalTime}</span>minutes.</p>
      <a href={recipe.url} target='_blank'>Click Here to see the full Recipe!</a>
      <img src={heart} onClick={() => heart===HeartBlack ? setHeart(HeartRedFilled) : setHeart(HeartBlack)} id="Heart"></img>
      {/* tenenorary oporater for when details is true */}
      <button  onClick={()=> {details===false ? setDetails(true) : setDetails(false)}}>See More Details</button>
      {details ? <div className="More-Details">List of ingredients: </div> : null}
    </div>
  );
};

export default Result;

// onClick={()=> {!showForm ? setShowForm(true) : setShowForm(false)}}