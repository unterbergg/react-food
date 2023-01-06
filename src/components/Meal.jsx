import {Link} from "react-router-dom";

function MealCard(props) {
    const {strMeal, idMeal, strMealThumb} = props;
    return <div className="card">
        <div className="card-image">
            <img src={strMealThumb} alt={strMeal}/>
        </div>
        <div className="card-content">
            <span className="card-title">{strMeal}</span>
        </div>
        <div className="card-action">
            <Link className="btn" to={`/meal/${idMeal}`}>Watch meal</Link>
        </div>
    </div>
}

export {MealCard}