import { elements } from './base';


const renderRecipe = recipe => {
    const { recipe_id, image_url, title, publisher } = recipe;

    const markup = ` 
    <li>
    <a class="results__link results__link" href="${recipe_id}">
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
    elements.pageButtons.innerHTML = '';
}
export const getInput = () => elements.searchInput.value;
export const renderRecipes = (recipes, currentPage = 1, resPerPage = 5) => {

        //Хайлтын үр дүнг хуудаслаж үзүүлэх
        //page = 2, start = 10, end = 20
        const start = (currentPage - 1) * resPerPage;
        const end = currentPage * resPerPage;


        recipes.slice(start, end).forEach(renderRecipe);

        //Хуудаслалтын товчуудыг гаргаж ирэх
        const totalPages = Math.ceil(recipes.length / resPerPage);

        renderButtuns(currentPage, totalPages);
    }
    //"prev" ===> "next" type
const createButton = (page, type, direction) => `
<button class="btn-inline results__btn--${type}" data-goto=${page}>
<svg class="search__icon">
    <use href="img/icons.svg#icon-triangle-${direction}"></use>
</svg>
<span>Хуудас ${page}</span>
</button>
`;
const renderButtuns = (currentPage, totalPages) => {
    let buttonHtml;
    if (currentPage === 1 && totalPages > 1) {
        //1-р хуудсан дээр байна 2-р хуудас гэдэг товч гарга
        buttonHtml = createButton(2, 'next', 'right');
    } else if (currentPage < totalPages) {
        //Өмнөх болон дараачийн хуудасруу шилжих товчуудыг үзүүл
        buttonHtml = createButton(currentPage - 1, 'prev', 'left');
        buttonHtml += createButton(currentPage + 1, 'next', 'right');
    } else if (currentPage === totalPages) {
        //Хамгийн сүүлийн хуудас дээр байна. Өмнөхрүү шилжүүлэх товчыг үзүүлэх
        buttonHtml = createButton(currentPage - 1, 'prev', 'left');
    }
    elements.pageButtons.insertAdjacentHTML('afterbegin', buttonHtml);
};