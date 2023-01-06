import {MealCard} from "./Meal";

function MealList({meals}) {
    return <div className="list" >
        {meals.map(meal => (
            <MealCard key={meal.idMeal} {...meal} />
        ))}
    </div>
}
export  {MealList}