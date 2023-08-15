import { useEffect, useState } from 'react';
import MealList from '../components/MealList';
import { getBreakfastMeals } from '../api';
import MealCard from '../components/MealCard';

const Breakfast = () => {
  const [breakfastMeals, setBreakfastMeals] = useState([]);

  useEffect(() => {
    getBreakfastMeals().then((meals) => setBreakfastMeals(meals));
  }, []);

  return (
    <div>
      <h2>Breakfast Meals</h2>
      <MealList meals={breakfastMeals} />
      <MealCard />
    </div>
  );
};

export default Breakfast;
