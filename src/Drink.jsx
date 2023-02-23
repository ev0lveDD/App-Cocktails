import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DrinkLoading from "./DrinkLoading";

function Drink(){
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    const navigate = useNavigate();

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
        const data = await (
            await fetch(url+id)).json();

        // set state when the data received
        const [item] = data.drinks;
        setData(item);
        setLoading(false);
        };

        dataFetch();
    }, []);

    return(
        <div>
        {loading ? <DrinkLoading /> : <div className="flex flex-col h-11/12 w-screen m-auto md:w-2/3">
        <nav>
        <button className="text-white flex absolute pt-1 text-2xl w-8 h-8 rounded-full content-center justify-center mt-6 opacity-80 ml-6 bg-gray-800 ease-out duration-600" onClick={() => navigate(-1)}><i className='fas fa-angle-left'></i></button>
        </nav>
        <img className="h-1/2 w-screen mb-6 rounded-bl-[4rem] md:w-2/3" src={data.strDrinkThumb}></img>
        <p className="mt-1.5 text-gray-400 text-sm font-medium mb-0 mx-8 delay-200 animate-fadeInBottom">{data.strCategory}</p>
        <h1 className="text-gray-800 mx-8 text-3xl font-extrabold mt-0 delay-300 animate-fadeInBottom">{data.strDrink}</h1>
        <h5 className="text-gray-800 mx-8 tracking-wide font-extrabold mb-0 delay-400 animate-fadeInBottom">INGREDIENTS</h5>
        <div className="text-gray-800 mx-8 mt-6 ">
            <p className="text-gray-400 text-sm font-semibold delay-500	animate-fadeInBottom">{data.strMeasure1}</p>
            <p className="mt-1.5 mb-6 text-xl font-semibold animate-fadeInBottom">{data.strIngredient1}</p>
            <p className="text-gray-400 text-sm font-semibold delay-500	animate-fadeInBottom">{data.strMeasure2}</p>
            <p className="mt-1.5 mb-6 text-xl font-semibold animate-fadeInBottom">{data.strIngredient2}</p>
            <p className="text-gray-400 text-sm font-semibold delay-500	animate-fadeInBottom">{data.strMeasure3}</p>
            <p className="mt-1.5 mb-6 text-xl font-semibold animate-fadeInBottom">{data.strIngredient3}</p>
            <p className="text-gray-400 text-sm font-semibold delay-500	animate-fadeInBottom">{data.strMeasure4}</p>
            <p className="mt-1.5 mb-6 text-xl font-semibold animate-fadeInBottom">{data.strIngredient4}</p>
            <p className="text-gray-400 text-sm font-semibold delay-500	animate-fadeInBottom">{data.strMeasure5}</p>
            <p className="mt-1.5 mb-6 text-xl font-semibold animate-fadeInBottom">{data.strIngredient5}</p>
            <p className="text-gray-400 text-sm font-semibold delay-500	animate-fadeInBottom">{data.strMeasure6}</p>
            <p className="mt-1.5 mb-6 text-xl font-semibold animate-fadeInBottom">{data.strIngredient6}</p>
            <p className="text-gray-400 text-sm font-semibold delay-500	animate-fadeInBottom">{data.strMeasure7}</p>
            <p className="mt-1.5 mb-6 text-xl font-semibold animate-fadeInBottom">{data.strIngredient7}</p>
            <p className="text-gray-400 text-sm font-semibold delay-500	animate-fadeInBottom">{data.strMeasure8}</p>
            <p className="mt-1.5 mb-6 text-xl font-semibold animate-fadeInBottom">{data.strIngredient8}</p>
            <p className="text-gray-400 text-sm font-semibold delay-500	animate-fadeInBottom">{data.strMeasure9}</p>
            <p className="mt-1.5 mb-6 text-xl font-semibold animate-fadeInBottom">{data.strIngredient9}</p>
            <p className="text-gray-400 text-sm font-semibold delay-500	animate-fadeInBottom">{data.strMeasure10}</p>
            <p className="mt-1.5 mb-6 text-xl font-semibold animate-fadeInBottom">{data.strIngredient10}</p>
            <p className="text-gray-400 text-sm font-semibold delay-500	animate-fadeInBottom">{data.strMeasure11}</p>
            <p className="mt-1.5 mb-6 text-xl font-semibold animate-fadeInBottom">{data.strIngredient11}</p>
            <p className="text-gray-400 text-sm font-semibold delay-500	animate-fadeInBottom">{data.strMeasure12}</p>
            <p className="mt-1.5 mb-6 text-xl font-semibold animate-fadeInBottom">{data.strIngredient12}</p>
            <p className="text-gray-400 text-sm font-semibold delay-500	animate-fadeInBottom">{data.strMeasure13}</p>
            <p className="mt-1.5 mb-6 text-xl font-semibold animate-fadeInBottom">{data.strIngredient13}</p>
            <p className="text-gray-400 text-sm font-semibold delay-500	animate-fadeInBottom">{data.strMeasure14}</p>
            <p className="mt-1.5 mb-6 text-xl font-semibold animate-fadeInBottom">{data.strIngredient14}</p>
            <p className="text-gray-400 text-sm font-semibold delay-500	animate-fadeInBottom">{data.strMeasure15}</p>
            <p className="mt-1.5 mb-6 text-xl font-semibold animate-fadeInBottom">{data.strIngredient15}</p>
        </div>
        <h5 className="text-gray-800 mx-8 tracking-wide font-extrabold mb-0 delay-400 animate-fadeInBottom">DESCRIPTION</h5>
        <p className="mx-8 text-base font-medium pb-16 delay-500 animate-fadeInBottom">{data.strInstructions}</p>
        </div>}
        </div>
    );
}

export default Drink;


