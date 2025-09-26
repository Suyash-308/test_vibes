import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom'
import "react-loading-skeleton/dist/skeleton.css";


function HotRecipes(){

    const[recipes,setRecipes]=useState([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        getRecipes();
      async  function getRecipes(){
       
    try {
      const resp=await fetch("https://dummyjson.com/recipes?limit=4&skip=0&select=name,image");
        const data=await resp.json();
        setRecipes(data.recipes);
    } catch (error) {
      alert("Error Occurs")
    }
    finally{
      setLoading(false);
    }
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
          {loading ? (
           <>
            {[1,2,3,4].map((e)=>{
              return(
                <div className="rounded-3xl flex flex-col">
                  <div>
                    <Skeleton 
                      width={300}
                      height={300}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  </div>
                  <div>
                    <Skeleton
                      width={300}
                      height={30}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  </div>
                </div>
              )
            })}
            </>
          ) : (
          recipes.map((recipe) => {
            return (
              <Link
                key={recipe.id}
                to={`/recipe/${recipe.id}`}
                className="rounded-2xl p-4 border flex flex-col gap-4 h-[340px] w-2xl"
              >
                <img
                  className="rounded-2xl border h-[300px] "
                  src={recipe.image}
                  alt=""
                />
                <p className="font-bold text-xl">{recipe.name}</p>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};
           
export default HotRecipes