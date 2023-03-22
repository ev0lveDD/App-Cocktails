import React from "react";

function DrinkListLoadingItem(){
    return(
    <div className="w-full">
        <div className="flex w-full m-auto gap-6 text-xl mb-4 border border-slate-100 rounded-lg py-4 px-8 hover:shadow hover:outline-none"> 
          <img className="w-24 h-24 rounded-lg animate-pulse" style={{backgroundColor: "#B2B2B2"}}></img>
          <div>
            <div className="bg-gray-400 mb-0 mt-4 w-24 h-2 animate-pulse"></div>
            <div className="mt-2 mb-0 w-16 h-2 bg-gray-400 animate-pulse"></div>
          </div>
        </div>
    </div>
    );
}

export default DrinkListLoadingItem;