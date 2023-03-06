import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
import Navigation from "./Navigation";
import DrinkListLoading from "./DrinkListLoading";


function DrinkList(props){
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const url= props.url;

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
        const data = await (
            await fetch(url+id)).json();

        // set state when the data received
        const item = data.drinks;
        setData(item);
        setLoading(false);
        };

        dataFetch();
    }, []);
    
    return(
    <div className="text-center flex items-center justify-center flex-col m-auto">
        <h1 className="text-xl justify-center items-center my-8 text-gray-800 font-medium">{id}</h1>
        <Navigation />
        {loading ? <DrinkListLoading /> : <div className="w-full">{data.map((item, i) =>{
          return(
            <Link to={`/Cocktails-App/Drink/${item.strDrink}`}>
              <div className="w-full">
                <div key={i} className="flex w-full m-auto gap-6 text-xl mb-4 border border-slate-100 rounded-lg py-4 px-8 hover:shadow hover:outline-none"> 
                  <img className="w-24 h-24 rounded-lg" src={(item.strDrinkThumb)}></img>
                  <div className="text-left">
                    <p className="text-gray-800 mb-0 mt-4 text-sm font-bold animate-fadeInBottom">{item.strDrink}</p>
                    <p className="mt-1.5 text-gray-400 text-sm font-medium mb-0 animate-fadeInBottom">{id}</p>
                  </div>
                </div>
              </div></Link>);
        })}</div>}
    </div>
    );
}

export default DrinkList;