// src/pages/Lunch.js
import { useEffect, useState } from 'react';
import MealList from '../components/MealList';
import { getLunchMeals } from '../api';
import MealCard from '../components/MealCard';

const Lunch = () => {
  const [lunchMeals, setLunchMeals] = useState([]);

  useEffect(() => {
    getLunchMeals().then((meals) => setLunchMeals(meals));
  }, []);

  return (
    <div>
      <h2>Lunch Meals</h2>
      <MealList meals={lunchMeals} />
      <MealCard />
    </div>
  );
};

export default Lunch;
