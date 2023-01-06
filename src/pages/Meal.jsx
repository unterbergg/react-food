import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";

import {getMealById} from "../api";

import {Preloader} from "../components/Preloader";

function Meal() {
    const {id} = useParams();
    const [meal, setMeal] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getMealById(id).then((data) => {
            setMeal(data.meals[0]);
        })
    }, [id])

    return <>
        {!meal.idMeal ? <Preloader /> : (
            <div className="meal">
                <img src={meal.strMealThumb} alt={meal.strMeal}/>
                <h1> {meal.strMeal} </h1>
                <h6> Category: {meal.strCategory} </h6>
                {
                    meal.strArea ? <h6> Area: {meal.strArea} </h6> : null
                }
                <table className="centered">
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            Object.keys(meal).map(key => {
                                if (key.includes("Ingredient") && meal[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{meal[key]}</td>
                                            <td>
                                                {
                                                    meal[`strMeasure${key.slice(13)}`]
                                                }
                                            </td>
                                        </tr>
                                    )
                                }
                                return null;
                            })
                        }
                    </tbody>
                </table>
                <p> {meal.strInstructions} </p>
                {
                    meal.strYoutube ? (
                        <div className="row">
                            <h5>Video Recipe</h5>
                            <iframe title={id}
                                    src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}
                                    allowFullScreen
                            />
                        </div>
                    ) : null
                }
            </div>
        )}

        <br/>
        <button className="btn" onClick={() => {navigate(-1)}}>
            Go Back
        </button>
    </>
}

export {Meal}