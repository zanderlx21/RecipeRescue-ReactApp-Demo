import React, { FormEvent, useEffect, useState } from 'react'
import { Recipe, RecipeThing, SearchTerms } from '../models/recipe';
import { fetchAllData } from '../services/RecipieAPI';
import RecipeRescue from '../RecipeRescue.gif'

interface Prop {
    onSubmit: (searchTerm: SearchTerms) => void;
}

const SearchForms = ({onSubmit}: Prop) => {
    const [recipe, setRecipe] = useState<RecipeThing[]>([]);
    const [label, setLabel] = useState("");
    const [calories, setCalories] = useState("");
    const [diet, setDiet] = useState("");
    const [showForm, setShowForm] = useState(false);



    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        let cal: number = parseInt(calories)
        let labelSearch: SearchTerms = {label: label, healthLabel: diet, calories: cal}
        onSubmit(labelSearch);
    }
    
    return (
        <div className='Search-Container'>
            <img src={RecipeRescue} alt="" id="RRLogo"/>
            <div className='Form-Container'>
                <form id="The-Form" onSubmit={handleSubmit}>
                    <input type="text" name="label" id="Search-Bar" placeholder='What are you in the mood for?' value={label} onChange={(e) => setLabel(e.target.value)}/>
                    <button type="submit" id="Search-Button">SEARCH</button>
                    <button id="Extra-Seach-Options-Button"onClick={()=> {showForm === false ? setShowForm(true) : setShowForm(false)}}>Advanced Search</button>
                    {showForm ? <div className='Radio-Buttons'>
                    <input type="radio" name="alcohol-cocktail" id="alcohol-cocktail" value="alcohol-cocktail" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="alcohol-cocktail">Alcohol Cocktail</label>
                    <input type="radio" name="alcohol-free" id="alcohol-free" value="alcohol-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="alcohol-free">Alcohol-Free</label>
                    <input type="radio" name="celery-free" id="celery-free" value="celery-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="celery-free">Celery Free</label>
                    <input type="radio" name="crustacean-free" id="crustacean-free" value="crustacean-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="crustacean-free">Crustacean Free</label>
                    <input type="radio" name="dairy-free" id="dairy-free" value="dairy-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="dairy-free">Dairy Free</label>
                    <input type="radio" name="DASH" id="DASH" value="DASH" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="DASH">DASH</label>
                    <input type="radio" name="egg-free" id="egg-free" value="egg-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="egg-free">Egg Free</label>
                    <input type="radio" name="fish-free" id="fish-free" value="fish-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="fish-free">Fish Free</label>
                    <input type="radio" name="fodmap-free" id="fodmap-free" value="fodmap-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="fodmap-free">Fodmap Free</label>
                    <input type="radio" name="gluten-free" id="gluten-free" value="gluten-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="gluten-free">Gluten Free</label>
                    <input type="radio" name="immuno-supportive" id="immuno-supportive" value="immuno-supportive" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="immuno-supportive">Immuno Supportive</label>
                    <input type="radio" name="keto-friendly" id="keto-friendly" value="keto-friendly" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="keto-friendly">Keto Friendly</label>
                    <input type="radio" name="kidney-friendly" id="kidney-friendly" value="kidney-friendly" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="kidney-friendly">Fidney Friendly</label>
                    <input type="radio" name="kosher" id="kosher" value="kosher" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="kosher">Kosher</label>
                    <input type="radio" name="low-fat-abs" id="low-fat-abs" value="low-fat-abs" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="low-fat-abs">Low Fat Abs</label>
                    <input type="radio" name="low-potassium" id="low-potassium" value="low-potassium" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="low-potassium">Low Potassium</label>
                    <input type="radio" name="low-sugar" id="low-sugar" value="low-sugar" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="low-sugar">Low Sugar</label>
                    <input type="radio" name="lupine-free" id="lupine-free" value="lupine-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="lupine-free">Lupine Free</label>
                    <input type="radio" name="Mediterranean" id="Mediterranean" value="Mediterranean" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="Mediterranean">Mediterranean</label>
                    <input type="radio" name="mollusk-free" id="mollusk-free" value="mullusk-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="mollusk-free">Mollusk Free</label>
                    <input type="radio" name="mustard-free" id="mustard-free" value="mustard-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="mustard-free">Mustard Free</label>
                    <input type="radio" name="no-oil-added" id="no-oil-added" value="no-oil-added" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="no-oil-added">No Oil Added</label>
                    <input type="radio" name="paleo" id="paleo" value="paleo" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="paleo">Paleo</label>
                    <input type="radio" name="peanut-free" id="peanut-free" value="peanut-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="peanut-free">Peanut Free</label>
                    <input type="radio" name="pescatarian" id="pescatarian" value="pescatarian" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="pescatarian">Pescatarian</label>
                    <input type="radio" name="pork-free" id="pork-free" value="pork-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="pork-free">Pork Free</label>
                    <input type="radio" name="red-meat-free" id="red-meat-free" value="red-meat-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="red-meat-free">Red Meat Free</label>
                    <input type="radio" name="sesame-free" id="sesame-free" value="sesame-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="sesame-free">Sesame Free</label>
                    <input type="radio" name="shellfish-free" id="shellfish-free" value="shellfish-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="shellfish-free">Shellfish Free</label>
                    <input type="radio" name="soy-free" id="soy-free" value="soy-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="soy-free">Soy Free</label>
                    <input type="radio" name="sugar-conscious" id="sugar-conscious" value="sugar-conscious" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="sugar-conscious">Sugar Conscious</label>
                    <input type="radio" name="sulfite-free" id="sulfite-free" value="sulfite-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="sulfite-free">Sulfite Free</label>
                    <input type="radio" name="tree-nut-free" id="tree-nut-free" value="tree-nut-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="tree-nut-free">Tree Nut Free</label>
                    <input type="radio" name="vegan" id="vegan" value="vegan" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="vegan">Vegan</label>
                    <input type="radio" name="vegetarian" id="vegetarian" value="vegetarian" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="vegetarian">Vegetarian</label>
                    <input type="radio" name="wheat-free" id="wheat-free" value="wheat-free" onChange={(e) => setDiet(e.target.value)} /><label htmlFor="wheat-free">Wheat Free</label>
                    {/* <input type="number" value={calories} placeholder="Set Max Calories" onChange={(e) => setCalories(e.target.value)} /> */}
                    </div> : <div></div>}
                </form>
            </div>
        </div>
    )
}



export default SearchForms;