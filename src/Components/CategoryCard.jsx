import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

function CategoryCard({category, itemData, iKey, imageCheck}) {
    
    return(
        <Link to={`/Cocktails-App/${category}/${itemData}`}>
            <div key={iKey} className="h-56 w-36 bg-cover bg-center flex rounded-lg	flex-col flex-wrap justify-end	flex items-stretch animate-fadeInRight" style={{backgroundImage: (imageCheck(itemData))}}>
                <h1 key={iKey} className="text-left text-base text-slate-100 drop-shadow-sm font-medium w-4/5 mx-4 my-4">{itemData}</h1>
            </div>
        </Link>
    );
}

export default CategoryCard;