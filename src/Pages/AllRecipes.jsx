import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from 'react-router-dom';

function AllRecipes() {
  const[recipes,setRecipes]=useState([]);
  const[loading,setLoading]=useState(true);

  useEffect(()=>{

    getRecipes();
    async function getRecipes(){
      try {
        const resp=await fetch("https://dummyjson.com/recipes");
        const data=await resp.json();
        setRecipes(data.recipes)
      } catch (error) {
        alert("Error Occurs")
      }finally{
         setLoading(false);
      }
    }
  },[]);
    

  return (
   <div className='max-w-7xl m-auto'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  p-8 text-center'>
     {loading ? (
         <>
          {[1,2,3,4,5,6,7,8].map((e)=>{
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
        ):(recipes.map((recipe)=>{
      return(
      <Link key={recipe.id} to={`/recipe/${recipe.id}`} >
      <img className=' rounded-2xl' src={recipe.image} alt="" />
      <p className='font-bold text-2xl'>{recipe.name}</p>
      </Link>
      );
      })
    )}
      </div>
    </div>
  );
};

export default AllRecipes