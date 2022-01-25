import React, { useState } from 'react';
import { Recipe, RecipeThing } from '../models/recipe';
import Result from './Result';

interface Prop {
    recipes: Recipe[];
}

const ResultsList = ({recipes}: Prop) => {
    const [] = useState();

    console.log(recipes)

    return (
        <div>
            <h2 id="ResultsHeader"> Here's some options...</h2>
            <div className="ResultsList">
            {recipes.map((recipe, i) => (<Result key={i} recipe={recipe.recipe}/>))}
            </div>
        </div>
    )
}


export default ResultsList;