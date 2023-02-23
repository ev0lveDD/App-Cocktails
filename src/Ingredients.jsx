import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Navigation from "./Navigation";
import SearchBar from './SearchBar';
import CategoryLoading from "./CategoryLoading";
import DrinkList from './DrinkList';

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
    <div class="text-center flex items-center justify-center flex-col m-auto">
        <h1 class="text-xl justify-center items-center my-8 text-gray-800 font-medium">Ingredients</h1>
        <SearchBar />
        <Navigation />
        {loading ? <CategoryLoading /> : <div class="flex gap-4 flex-wrap items-center justify-center pb-8 md:w-2/4">{data.map((item) =>{
          return(
            <Link to={`/Cocktails-App/Ingredients/${item.strIngredient1}`}>
              <div class="h-56 w-36 bg-cover bg-center flex rounded-lg	flex-col flex-wrap justify-end	flex items-stretch animate-fadeInRight"  style={{backgroundImage: (imageCheck(item.strCategory))}}>
                <h1 class="text-left text-base text-slate-100 drop-shadow-sm font-medium w-4/5 mx-4 my-4">{item.strIngredient1}</h1>
              </div></Link>);
        })}</div>}
    </div>
    );
}

export default Ingredients;