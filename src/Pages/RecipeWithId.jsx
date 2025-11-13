import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeWithId() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams(); // cleaner destructuring

  useEffect(() => {
    async function getRecipe() {
      const resp = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await resp.json();
      setRecipe(data);
    }

    getRecipe();
  }, [id]); // 👈 this makes it update when id changes

  return (
    <div className="m-auto max-w-7xl px-[10vw]">
      {recipe ? (
        <div className="flex   items-center gap-15 pt-10 font-bold ">
        
          <div className="">
            <img
              className="h-[70vh] w-full  rounded-2xl"
              src={recipe.image}
              alt={recipe.name}
            />
          </div>

         
          <div className="flex-y space-y-3">
            <p className="text-4xl font-bold text-amber-700">{recipe.name}</p>
            <p className="text-lg text-gray-700">⭐ Rating: {recipe.rating}</p>
            <p className="text-lg text-gray-700">📝 Reviews: {recipe.reviewCount}</p>
            <p className="text-lg text-gray-700">🍽️ Meal Type: {recipe.mealType}</p>
          </div>
        </div>
      ) : (
        <p className="text-center mt-10 text-gray-600 text-lg">Loading recipe...</p>
      )}
    </div>
  );
}

export default RecipeWithId;
