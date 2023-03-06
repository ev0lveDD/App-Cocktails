import React from "react";
import {Link, useLocation} from "react-router-dom";
import NavigationButton from "./Components/NavigationButton";

function Navigation() {
    const location = useLocation();

    return (
    <div>
        <nav class="flex gap-3 justify-center items-center my-8">
        <NavigationButton name="Category" icon="fa-solid fa-wine-glass-empty"/>
        <NavigationButton name="Glasses" icon="fa-solid fa-martini-glass-empty"/>
        <NavigationButton name="Ingredients" icon="fa-regular fa-lemon"/>
        <NavigationButton name="Alcohol" icon="fa-solid fa-glass-water"/>
        </nav>
    </div>);
}

export default Navigation;