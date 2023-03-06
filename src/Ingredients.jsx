import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Navigation from "./Navigation";
import SearchBar from './SearchBar';
import CategoryLoading from "./CategoryLoading";
import DrinkList from './DrinkList';
import CategoryCard from './Components/CategoryCard';

function Ingredients() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    function imageCheck(drink) {
      if(drink==="Shake"){
        return(`url(${require('./Glasses-Images/highball.JPG')})`);
      } else {
        return(`url(${require('./Glasses-Images/highball.JPG')})`);
      }
    }


    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
        const data = await (
            await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")).json();

        // set state when the data received
        const item = data.drinks;
        setData(item);
        setLoading(false);
        };

        dataFetch();
    }, []);
    
    return(
    <div className="text-center flex items-center justify-center flex-col m-auto">
        <h1 className="text-xl justify-center items-center my-8 text-gray-800 font-medium">Ingredients</h1>
        <SearchBar />
        <Navigation />
        {loading ? <CategoryLoading /> : <div className="flex gap-4 flex-wrap items-center justify-center pb-8 md:w-2/4">{data.map((item, i) =>{
          return(
            <CategoryCard category={"Ingredients"} itemData={item.strIngredient1} iKey={i} imageCheck={imageCheck}/>);
        })}</div>}
    </div>
    );
}

export default Ingredients;