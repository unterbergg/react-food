import {URL} from "./config";

const getMealById = async (mealId) => {
    const response = await fetch(URL + 'lookup.php?i=' + mealId);
    return await response.json();
}

const getAllCategories = async () => {
    const response = await fetch(URL + 'categories.php');
    return await response.json();
}

const getFilteredCategory = async (catName) => {
    const response = await fetch(URL + 'filter.php?c=' + catName);
    return await response.json();
}

export {getMealById, getAllCategories, getFilteredCategory}