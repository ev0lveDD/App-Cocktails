import './App.css';
import React, {useState, useEffect} from 'react';
import Category from './Screens/Category';
import Glasses from "./Screens/Glasses";
import Ingredients from "./Screens/Ingredients";
import Alcohol from "./Screens/Alcohol";
import DrinkList from './Screens/DrinkList';
import Drink from './Screens/Drink';
import {Link, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div class="w-11/12 h-11/12 m-auto flex flex-col items-center justify-center">
    <Routes>
      <Route path="/" element={<Category /> } />
      <Route path="/Cocktails-App" element={<Category /> } />
      <Route path="/Cocktails-App/Category" element={<Category /> } />
      <Route path="/Cocktails-App/Glasses" element={<Glasses /> } />
      <Route path="/Cocktails-App/Ingredients" element={<Ingredients /> } />
      <Route path="/Cocktails-App/Alcohol" element={<Alcohol /> } />
      <Route path="/Cocktails-App/Category/:id" element={<DrinkList url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?c="/> } />
      <Route path="/Cocktails-App/Glasses/:id" element={<DrinkList url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?g="/> } />
      <Route path="/Cocktails-App/Ingredients/:id" element={<DrinkList url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="/> } />
      <Route path="/Cocktails-App/Alcohol/:id" element={<DrinkList url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?a="/> } />
      <Route path="/Cocktails-App/Search/:id" element={<DrinkList url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="/> } />
      <Route path="/Cocktails-App/Drink/:id" element={<Drink /> } />
    </Routes>
    </div>
  );
}

export default App;
