import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Navigation from "./Navigation";
import SearchBar from './SearchBar';
import CategoryLoading from "./CategoryLoading";
import DrinkList from './DrinkList';
import CategoryCard from './Components/CategoryCard';

function Alcohol() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    function imageCheck(drink) {
      switch (drink) {
        case 'Alcoholic':
          return(`url(${require('./Alcoholic-Images/alcoholic.jpg')})`);
        case 'Non alcoholic':
          return(`url(${require('./Alcoholic-Images/non-alcoholic.jpg')})`);
        case 'Optional alcohol':
          return(`url(${require('./Alcoholic-Images/optional-alcohol.jpg')})`);
        default:
          return(`url(${require('./Alcoholic-Images/alcoholic.jpg')})`);
      }
    }


    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
        const data = await (
            await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list")).json();

        // set state when the data received
        const item = data.drinks;
        setData(item);
        setLoading(false);
        };

        dataFetch();
    }, []);
    
    return(
    <div class="text-center flex items-center justify-center flex-col m-auto">
        <h1 class="text-xl justify-center items-center my-8 text-gray-800 font-medium">Alcohol</h1>
        <SearchBar />
        <Navigation />
        {loading ? <CategoryLoading /> : <div class="flex gap-4 flex-wrap items-center justify-center pb-8 md:w-3/4">{data.map((item, i) =>{
          return(
            <CategoryCard category={"Alcohol"} itemData={item.strAlcoholic} iKey={i} imageCheck={imageCheck}/>);
        })}</div>}
    </div>
    );
}

export default Alcohol;