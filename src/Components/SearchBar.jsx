import React, {useState} from "react";
import {Link} from "react-router-dom";

function SearchBar(){
    
    const [inputText, setInputText] = useState("");

    function handleTextChange(event) {
        const text = event.target.value;
        setInputText(text);
    }

    return(
         <form>   
        <div className="container flex justify-center items-center px-4 sm:px-4 lg:px-8">
            <div className="relative">
                <input type="text" onChange={handleTextChange} className="h-14 w-72 pr-8 pl-5 rounded-full z-0 focus:shadow focus:outline-none border font-medium" placeholder="Search anything..."/>
                <div className="absolute top-4 right-3">
                    <Link to={`/Cocktails-App/Search/${inputText}`}>
                        <button type="submit">
                            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                        </button>
                    </Link> 
                </div>
            </div>
        </div>
    </form>
        
    );
}

export default SearchBar;