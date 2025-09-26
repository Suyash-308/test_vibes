import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function RecipeWithId() {
  const[recipe,setRecipe]=useState(null);
  const params=useParams();

   useEffect(()=>{
  
    getRecipe();

    async function getRecipe(){
      const resp=await fetch(`https://dummyjson.com/recipes/${params.id}`);
      const data=await resp.json();

      setRecipe(data);
    }
   },[]);


  return (
    <div className='m-auto max-w-7xl px-[10vw]'>
      {recipe && (
       <div className='font-bold'>
        <img className='h-[80vh] rounded-2xl' src={recipe.image} alt=""/>
        <p className='text-3xl font-bold '>{recipe.name}</p>
        <p>Rating: {recipe.rating}</p>
        <p>Review: {recipe.reviewCount}</p>
        <p>Meal Type: {recipe.mealType}</p>

       </div>
      )}
    </div>
    
  );
};

export default RecipeWithId