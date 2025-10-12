import React, { useEffect, useState } from 'react'
import { FaHamburger } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [recipeInput, setRecipeInput] = useState("");
  console.log(recipeInput);
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    // https://dummyjson.com/recipes/search?q=classic

    if (recipeInput === "") {
      return ;
    }
    searchRecipes();

    async function searchRecipes() {
      const res = await fetch(`https://dummyjson.com/recipes/search?q=${recipeInput}`);
      const data = await res.json();

      setRecipeList(data.recipes);
    }
  }, [recipeInput]);

  return (
    <header className="flex relative text-2xl items-center justify-between h-20 px-10">
      <Link to="/" className="flex items-center gap-4 font-bold">
        <FaHamburger />
        Taste Vibes
      </Link>

      <div className="flex gap-4">
        <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
          <CiSearch />
        </button>
        <button className="cursor-pointer">
          <VscThreeBars />
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-0  left-75  bg-amber-300 flex justify-center items-center h-[80vh] w-[50vw]">
          <div className="h-[60vh] w-[40vw] bg-gray-100 border p-4 overflow-y-scroll          ">
            <button onClick={() => setIsOpen(close)}>Close</button>
            <input
              type="search"
              className="border w-full"
              placeholder="Search recipe..."
              onChange={(e) => setRecipeInput(e.target.value)}
              value={recipeInput}
            />

            <div className="flex flex-col">
              {recipeList.map((recipe) => {
                return <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>;
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


export default Header