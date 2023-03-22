import React from "react";
import DrinkListLoadingItem from "../Components/DrinkListLoadingItem";

function DrinkListLoading() {
    return(
        <div className="w-full">
            <DrinkListLoadingItem />
            <DrinkListLoadingItem />
            <DrinkListLoadingItem />
            <DrinkListLoadingItem />
            <DrinkListLoadingItem />
            <DrinkListLoadingItem />
            <DrinkListLoadingItem />
            <DrinkListLoadingItem />
        </div>
    );
}

export default DrinkListLoading;