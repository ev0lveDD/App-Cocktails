import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Navigation from "./Navigation";
import SearchBar from './SearchBar';
import CategoryLoading from "./CategoryLoading";
import DrinkList from './DrinkList';

function Category() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    function imageCheck(drink) {
      switch (drink) {
        case 'Ordinary Drink':
          return(`url(${require('./Category-Images/old-fashioned.jpg')})`);
        case 'Other/Unknown':
          return(`url(${require('./Category-Images/other.jpg')})`);
        case 'Shake':
          return(`url(${require('./Category-Images/shake3.jpg')})`);
        case 'Cocktail':
          return(`url(${require('./Category-Images/cocktail.jpg')})`);
        case 'Cocoa':
          return(`url(${require('./Category-Images/cocoa.jpg')})`);
        case 'Shot':
          return(`url(${require('./Category-Images/shot.jpg')})`);
        case 'Coffee / Tea':
          return(`url(${require('./Category-Images/coffee.PNG')})`); 
        case 'Homemade Liqueur':
          return(`url(${require('./Category-Images/homemade.JPG')})`);
        case 'Punch / Party Drink':
          return(`url(${require('./Category-Images/punch.JPG')})`);
        case 'Beer':
          return(`url(${require('./Category-Images/beer2.jpg')})`);
        case 'Soft Drink':
          return(`url(${require('./Category-Images/soft-drink.jpg')})`);
        default:
          return(`url(${require('./Category-Images/old-fashioned.jpg')})`);
      }
    }

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
        const data = await (
            await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")).json();

        // set state when the data received
        const item = data.drinks;
        setData(item);
        setLoading(false);
        };

        dataFetch();
    }, []);
    
    return(
    <div class="text-center flex items-center justify-center flex-col m-auto">
        <h1 class="text-xl justify-center items-center my-8 text-gray-800 font-medium">Category</h1>
        <SearchBar />
        <Navigation />
        {loading ? <CategoryLoading /> : <div class="flex gap-4 flex-wrap items-center justify-center pb-8 md:w-2/4">{data.map((item) =>{
          return(
            <Link to={`/Cocktails-App/Category/${item.strCategory}`}>
              <div class="h-56 w-36 bg-cover bg-center flex rounded-lg	flex-col flex-wrap justify-end	flex items-stretch animate-fadeInRight" style={{backgroundImage: (imageCheck(item.strCategory))}}>
                <h1 class="text-left text-base text-slate-100 drop-shadow-sm font-medium w-4/5 mx-4 my-4">{item.strCategory}</h1>
              </div>
            </Link>);
        })}</div>}
    </div>
    );
}

export default Category;