import React from "react";
import { fetchRecipes, fetchRecipesDetails } from '../utils/utils';

const RecipeCard = ({ image, title, setCardDetails }) => {
    const getCardTitle = async (e) => {
        if (setCardDetails !== null) {
            const cardTitle = e.currentTarget.querySelector('.card-title').textContent;
            const cardSearch = await fetchRecipes(cardTitle);
            const cardId = cardSearch.results[0].id;
            const cardDetails = await fetchRecipesDetails(cardId)
            setCardDetails(cardDetails);
        }
    }
    return (
        <div className="col-6 col-md-4 mb-4">
            <div className="card h-100" data-bs-toggle="modal" data-bs-target="#cardModal" onClick={(e) => getCardTitle(e)}>
                <img src={image} className="card-img" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;