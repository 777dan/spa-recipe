const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

const fetchRandomRecipes = async () => {

  const response = await fetch(`https://api.spoonacular.com/recipes/random?number=15&apiKey=${apiKey}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  const result = await response.json();
  // console.log("API Response:", result);
  return result;
};


const fetchRecipes = async (searchQuery) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  const result = await response.json();
  // console.log("API Response:", result);
  return result;
};

const fetchRecipesDetails = async (recipeId) => {
  const detailsUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;
  const detailsResponse = await fetch(detailsUrl);
  const recipeDetails = await detailsResponse.json();
  // console.log("API Response:", recipeDetails);
  return recipeDetails;
};

export { fetchRecipes, fetchRandomRecipes, fetchRecipesDetails };
