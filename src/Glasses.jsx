import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Navigation from "./Navigation";
import SearchBar from './SearchBar';
import CategoryLoading from "./CategoryLoading";
import DrinkList from './DrinkList';

function Glasses() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    function imageCheck(drink) {
      switch (drink) {
        case 'Highball glass':
          return(`url(${require('./Glasses-Images/highball.JPG')})`);
        case 'Cocktail glass':
          return(`url(${require('./Glasses-Images/cocktail.JPG')})`);
        case 'Old-fashioned glass':
          return(`url(${require('./Glasses-Images/old-fashioned.JPG')})`);
        case 'Whiskey Glass':
          return(`url(${require('./Glasses-Images/whiskey.jpg')})`);
        case 'Collins glass':
          return(`url(${require('./Glasses-Images/collins.jpg')})`);
        case 'Pousse cafe glass':
          return(`url(${require('./Glasses-Images/pousse-cafe.jpg')})`);
        case 'Champagne flute':
          return(`url(${require('./Glasses-Images/champagne.jpg')})`);
        case 'Whiskey sour glass':
          return(`url(${require('./Glasses-Images/whiskey-sour.jpg')})`);
        case 'Cordial glass':
          return(`url(${require('./Glasses-Images/cordial.jpg')})`);
        case 'Brandy snifter':
          return(`url(${require('./Glasses-Images/brandy-snifter.JPG')})`);
        case 'White wine glass':
          return(`url(${require('./Glasses-Images/white-wine.jpg')})`);
        case 'Nick and Nora Glass':
          return(`url(${require('./Glasses-Images/nick-and-nora.jpg')})`);
        case 'Hurricane glass':
          return(`url(${require('./Glasses-Images/hurricane.JPG')})`);
        case 'Coffee mug':
          return(`url(${require('./Glasses-Images/coffee-mug.JPG')})`);
        case 'Shot glass':
          return(`url(${require('./Glasses-Images/shot-glass.JPG')})`);
        case 'Jar':
          return(`url(${require('./Glasses-Images/jar.jpg')})`);
        case 'Irish coffee cup':
          return(`url(${require('./Glasses-Images/irish-coffee.jpeg')})`);
        case 'Punch bowl':
          return(`url(${require('./Glasses-Images/punch-bowl.jpg')})`);
        case 'Pitcher':
          return(`url(${require('./Glasses-Images/pitcher.jpg')})`);
        case 'Pint glass':
          return(`url(${require('./Glasses-Images/pint.JPG')})`);
        case 'Copper Mug':
          return(`url(${require('./Glasses-Images/copper-mug.jpg')})`);
        case 'Wine Glass':
          return(`url(${require('./Glasses-Images/wine-glass.jpg')})`);
        case 'Beer mug':
          return(`url(${require('./Glasses-Images/beer-mug.jpg')})`);
        case 'Margarita/Coupette glass':
          return(`url(${require('./Glasses-Images/margarita.JPG')})`);
        case 'Beer pilsner':
          return(`url(${require('./Glasses-Images/beer-pilsner.jpg')})`);
        case 'Beer Glass':
          return(`url(${require('./Glasses-Images/beer-glass.JPG')})`);
        case 'Parfait glass':
          return(`url(${require('./Glasses-Images/parfait.JPG')})`);
        case 'Mason jar':
          return(`url(${require('./Glasses-Images/mason-jar.jpg')})`);
        case 'Margarita glass':
          return(`url(${require('./Glasses-Images/margarita-glass.jpg')})`);
        case 'Martini Glass':
          return(`url(${require('./Glasses-Images/martini.JPG')})`);
        case 'Balloon Glass':
          return(`url(${require('./Glasses-Images/balloon.JPG')})`);
        case 'Coupe Glass':
          return(`url(${require('./Glasses-Images/coupe.JPG')})`);
        default:
          return(`url(${require('./Glasses-Images/highball.JPG')})`);
      }
    }


    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
        const data = await (
            await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")).json();

        // set state when the data received
        const item = data.drinks;
        setData(item);
        setLoading(false);
        };

        dataFetch();
    }, []);
    
    return(
    <div class="text-center flex items-center justify-center flex-col m-auto">
        <h1 class="text-xl justify-center items-center my-8 text-gray-800 font-medium">Glasses</h1>
        <SearchBar />
        <Navigation />
        {loading ? <CategoryLoading /> : <div class="flex gap-4 flex-wrap items-center justify-center pb-8 md:w-2/4">{data.map((item) =>{
          return(
            <Link to={`/Cocktails-App/Glasses/${item.strGlass}`}>
              <div class="h-56 w-36 bg-cover bg-center flex rounded-lg	flex-col flex-wrap justify-end	flex items-stretch animate-fadeInRight"  style={{backgroundImage: (imageCheck(item.strGlass))}}>
                <h1 class="text-left text-base text-slate-100 drop-shadow-sm font-medium w-4/5 mx-4 my-4">{item.strGlass}</h1>
              </div></Link>);
        })}</div>}
    </div>
    );
}

export default Glasses;