import React from "react";
import { useNavigate } from 'react-router-dom';

function DrinkLoading() {
    const navigate = useNavigate();
    return(
        <div className="flex flex-col h-11/12 w-screen m-auto">
            <nav>
                <button className="text-white flex absolute pt-1 text-2xl w-8 h-8 rounded-full content-center justify-center mt-6 opacity-80 ml-6 bg-gray-800 ease-out duration-600" onClick={() => navigate(-1)}><i className='fas fa-angle-left'></i></button>
            </nav>
            <div className="mx-8 h-6/12 w-full mb-6 bg-gray-400 rounded-bl-[4rem] animate-pulse"></div>
            <div className="mx-8 mt-16 mb-0 w-16 h-2 bg-gray-400 animate-pulse"></div>
            <div className="bg-gray-400 mx-8 mt-2 mb-8 animate-pulse"></div>
            <div className="bg-gray-400 mx-8 mt-2 mb-0 w-40 h-4 animate-pulse"></div>
            <div className="mx-8 mt-6">
                <div className="bg-gray-400 w-16 h-4 animate-pulse"></div>
                <div className="bg-gray-400 mt-1.5 mb-6 w-28 h-4 animate-pulse"></div>
                <div className="bg-gray-400 w-16 h-4 animate-pulse"></div>
                <div className="bg-gray-400 mt-1.5 mb-6 w-28 h-4g animate-pulse"></div>
                <div className="bg-gray-400 w-16 h-4 animate-pulse"></div>
                <div className="bg-gray-400 mt-1.5 mb-6 w-28 h-4 animate-pulse"></div>
                <div className="bg-gray-400 w-16 h-4 animate-pulse"></div>
                <div className="bg-gray-400 mt-1.5 mb-6 w-28 h-4 animate-pulse"></div>
            </div>
            <div className="bg-gray-400 mx-8 mt-2 mb-0 w-40 h-4 animate-pulse"></div>
            <div className="bg-gray-400 mx-8 mt-2 w-96 h-60 pb-16 animate-pulse"></div>
        </div>
    );
}

export default DrinkLoading;