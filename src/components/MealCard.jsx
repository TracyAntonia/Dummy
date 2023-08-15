// src/components/MealCard.jsx
import React from 'react';

// const MealCard = ({ meal }) => {
//   console.log(meal);
//     return (
//       <div>
//         <h3>{meal.title}</h3>
//         <img src={meal.image} alt={meal.title} />

//       </div>
//     );
//   };

const MealCard = ({ meal }) => {
  return (
    <div>
      <h3>{meal.strMeal}</h3>
      <p>Category: {meal.strCategory}</p>
      <p>Instructions: {meal.strInstructions}</p>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
    </div>
  );
};
  
export default MealCard;
  