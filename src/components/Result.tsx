import React, { useState } from "react";
import { Ingredients, Recipe, RecipeThing } from "../models/recipe";
import HeartBlack from "../HeartBlack.png";
import HeartRedFilled from "../HeartRedFilled.png";

interface Prop {
  recipe: RecipeThing;
}

const Result = ({ recipe }: Prop) => {
  const [details, setDetails] = useState(false);
  console.log(recipe);
  console.log(recipe.label);
  return (
    <div className="Result" onClick={() => setDetails(true)}>
      <h2 id="Recipe-Name">{recipe.label}</h2>
      
      <img src={recipe.image} alt="Image of Tastey Dish" />
      <p>Done in <span id="Recipe-Time">{recipe.totalTime}</span>minutes.</p>
      <a href={recipe.url}>Click Here to see the full Recipe!</a>
      <img src={HeartBlack} id="Heart"></img>
      {/* tenenorary oporater for when details is true */}
      <button onClick={() => setDetails(true)}>See More Details</button>
    </div>
  );
};

export default Result;
