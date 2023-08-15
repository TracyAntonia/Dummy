const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=$';

export const getMeals = () => {
  return fetch(`${BASE_URL}/search.php?s=Arrabiata`)
    .then(response => response.json())
    .then(data => data.meals)
    .catch(error => {
      console.error('Error fetching meals:', error);
      return [];
    });
};

export const getBreakfastMeals = () => {
  return fetch(`${BASE_URL}/filter.php?c=Breakfast`)
    .then(response => response.json())
    .then(data => data.meals)
    .catch(error => {
      console.error('Error fetching breakfast meals:', error);
      return [];
    });
};

export const getLunchMeals = () => {
  return fetch(`${BASE_URL}/filter.php?c=Lunch`)
    .then(response => response.json())
    .then(data => data.meals)
    .catch(error => {
      console.error('Error fetching lunch meals:', error);
      return [];
    });
};

export const getDinnerMeals = () => {
  return fetch(`${BASE_URL}/filter.php?c=Dinner`)
    .then(response => response.json())
    .then(data => data.meals)
    .catch(error => {
      console.error('Error fetching dinner meals:', error);
      return [];
    });
};
// import axios from 'axios';

// const BASE_URL = 'www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';

// export const getMeals = async (query) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/search.php?s=${query}`);
//     return response.data.meals;
//   } catch (error) {
//     console.error('Error fetching meals:', error);
//     return [];
//   }
// };

// export const getBreakfastMeals = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/filter.php?c=Breakfast`);
//     return response.data.meals;
//   } catch (error) {
//     console.error('Error fetching breakfast meals:', error);
//     return [];
//   }
// };

// export const getLunchMeals = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/filter.php?c=Lunch`);
//     return response.data.meals;
//   } catch (error) {
//     console.error('Error fetching lunch meals:', error);
//     return [];
//   }
// };

// export const getDinnerMeals = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/filter.php?c=Dinner`);
//     return response.data.meals;
//   } catch (error) {
//     console.error('Error fetching dinner meals:', error);
//     return [];
//   }
// };

// // import axios from 'axios';

// // const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php';

// // export const getMeals = async (query) => {
// //   try {
// //     const response = await axios.get(`${BASE_URL}?s=${query}`);
// //     return response.data.meals;
// //   } catch (error) {
// //     console.error('Error fetching meals:', error);
// //     return [];
// //   }
// // };

// // export const getBreakfastMeals = async () => {
// //   try {
// //     const response = await axios.get(`${BASE_URL}?c=Breakfast`);
// //     return response.data.meals;
// //   } catch (error) {
// //     console.error('Error fetching breakfast meals:', error);
// //     return [];
// //   }
// // };

// // export const getLunchMeals = async () => {
// //   try {
// //     const response = await axios.get(`${BASE_URL}?c=Lunch`);
// //     return response.data.meals;
// //   } catch (error) {
// //     console.error('Error fetching lunch meals:', error);
// //     return [];
// //   }
// // };

// // export const getDinnerMeals = async () => {
// //   try {
// //     const response = await axios.get(`${BASE_URL}?c=Dinner`);
// //     return response.data.meals;
// //   } catch (error) {
// //     console.error('Error fetching dinner meals:', error);
// //     return [];
// //   }
// // };


// // import axios from 'axios';

// // const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch=${process.env.REACT_URL}&number=10';

// // export const getMeals = async () => {
// //   try {
// //     const response = await axios.get(`${BASE_URL}/search.php?s=Arrabiata`);
// //     return response.data.meals;
// //   } catch (error) {
// //     console.error('Error fetching meals:', error);
// //     return [];
// //   }
// // };

// // export const getBreakfastMeals = async () => {*
// //   try {
// //     const response = await axios.get(`${BASE_URL}/search.php?s=Arrabiata`);
// //     return response.data.meals;
// //   } catch (error) {
// //     console.error('Error fetching breakfast meals:', error);
// //     return [];
// //   }
// // };

// // export const getLunchMeals = async () => {
// //   // You can modify the API endpoint to fetch lunch meals from www.themealdb.com
// //   try {
// //     const response = await axios.get(`${BASE_URL}/search.php?s=Arrabiata`);
// //     return response.data.meals;
// //   } catch (error) {
// //     console.error('Error fetching lunch meals:', error);
// //     return [];
// //   }
// // };

// // export const getDinnerMeals = async () => {
// //   // You can modify the API endpoint to fetch dinner meals from www.themealdb.com
// //   try {
// //     const response = await axios.get(`${BASE_URL}/search.php?s=Arrabiata`);
// //     return response.data.meals;
// //   } catch (error) {
// //     console.error('Error fetching dinner meals:', error);
// //     return [];
// //   }
// // };
