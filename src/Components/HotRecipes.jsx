import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function HotRecipes(){

    const[recipes,setRecipes]=useState([]);

    useEffect(()=>{
        getRecipes();
      async  function getRecipes(){
        const resp=await fetch("https://dummyjson.com/recipes?limit=4&skip=0&select=name,image");
        const data=await resp.json();
        setRecipes(data.recipes);
        }
    },[]);



  return (
    <div>
        <h2 className='flex items-center justify-center gap-3 font-bold p-2'> 
            <div className='h-[3px] w-[50px] bg-black'></div>
            HOT RECIPES
            <div className='h-[3px] w-[50px] bg-black'></div>
        </h2>
        <p className='text-center uppercase py-4'>Locally sourced, organic ingredients for a fresh and eco-friendly experience</p>

        <div className='flex gap-4 m-auto max-w-7xl'>
           {recipes.map((recipe)=>{
            return(
           <Link key={recipe.id}
            to={`recipe/${recipe.id}`}
            className='border rounded-2xl' >

           <img className='rounded-2xl' src={recipe.image}alt="" />
           <p className='font-bold text-center'>{recipe.name}</p>
           </Link>
           );
           })}
        </div>
    </div>
  );
};

export default HotRecipes