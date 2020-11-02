import { elements } from './base';


const renderRecipe = recipe => {
    const { recipe_id, image_url, title, publisher } = recipe;

    const markup = ` 
    <li>
    <a class="results__link results__link--active" href="${recipe_id}">
        <figure class="results__fig">
            <img src="${image_url}" alt="Test">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${title}</h4>
            <p class="results__author">${publisher}</p>
        </div>
    </a>
    </li>
    `;
    //ul рүүгээ нэмнэ
    elements.searchResultList.insertAdjacentHTML("beforeend", markup);
}
export const clearSearchQuery = () => {
    elements.searchInput.value = '';
}
export const clearSearchResult = () => {
    elements.searchResultList.innerHTML = '';
}
export const getInput = () => elements.searchInput.value;
export const renderRecipes = recipes => {
    //undefined
    recipes.forEach(renderRecipe);
}