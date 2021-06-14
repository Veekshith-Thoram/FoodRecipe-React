import React from 'react';
import style from "./recipe.module.css"

function Recipe({title, image,calorie, ingredients}) {
    // var crCalorie = calorie.substring(calorie.indexOf("."))
    return (
        <div className={style.recipe}>
            <h2>{title}</h2>
            <p>Calories: {calorie}</p>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img className={style.image} src={image} alt="/" />
        </div>
    )
}

export default Recipe
