import React from "react";
import {Link, useLocation} from "react-router-dom";

function NavigationButton({name, icon}) {
    const location = useLocation();
    const activeLink = `bg-gray-500 hover:bg-gray-700 text-white font-bold text-xl py-2 px-2 rounded-full justify-center items-center w-14 h-14 ${icon}` ;
    const nonActiveLink = `bg-gray-800 hover:bg-gray-700 text-white font-bold text-xl py-2 px-2 rounded-full justify-center items-center w-14 h-14 ${icon}`;
    

    return (
        <Link to={`/Cocktails-App/${name}`} class="flex flex-col items-center justify-center">
            <button className={location.pathname==`/Cocktails-App/${name}` ? activeLink : nonActiveLink} >
            </button>
            <span class="mt-2 text-xs font-medium uppercase">{name}</span>
        </Link>);
}

export default NavigationButton;