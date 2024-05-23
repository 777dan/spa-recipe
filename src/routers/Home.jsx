import React from "react";
import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { fetchRandomRecipes } from "../utils/utils";

const Home = ({ searchResult = [] }) => {
  const [recipes, setRecipes] = useState([]);
  const [cardDetails, setCardDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const randomRecipes = await fetchRandomRecipes();
      setRecipes(randomRecipes.recipes);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchResult.length > 0) {
      setRecipes(searchResult);
    }
  }, [searchResult]);

  console.log(recipes)

  return (
    <div className="container">
      <div className="row my-5">
        {recipes.map((result) => (
          <RecipeCard
            key={result.id}
            image={result.image}
            title={result.title}
            brand={result.brand}
            setCardDetails={setCardDetails}
          />
        ))}
      </div>
      <div className="modal" id="cardModal">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title">{cardDetails.title}</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              what..
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;