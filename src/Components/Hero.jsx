import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";

function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto h-[80vh] px-6 md:px-12">
      {/* Left Text Section */}
      <div className="flex flex-col gap-6 md:w-1/2 mt-20 md:mt-0">
        <h3 className="text-2xl font-semibold text-amber-700">
          Crispy, Crunchy, Veggie Deliciousness!
        </h3>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Burgers That Love the <span className="text-amber-700">Earth!</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Discover mouthwatering plant-based recipes made for every craving.
        </p>

        <Link
          to="/all-recipes"
          className="group border-2 border-amber-700 hover:bg-amber-700 text-amber-700 hover:text-white transition-all duration-300 px-6 py-3 w-fit flex items-center gap-2 font-semibold rounded-lg"
        >
          Explore Recipes
          <IoMdArrowRoundForward className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="relative md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          className="w-[420px] h-[420px] object-cover rounded-2xl shadow-xl"
          src="https://media.istockphoto.com/id/1206323252/photo/two-big-hamburgers-on-white.jpg?s=612x612&w=0&k=20&c=V8pA1lGECoAT3KtqItlSpZCZrUnD6uU_rWyvZ5ekWOY="
          alt="Veggie Burger"
        />

        {/* Decorative Shape */}
        <div className="absolute -z-10 top-10 left-10 w-[300px] h-[300px] bg-amber-100 rounded-full blur-3xl opacity-60"></div>
      </div>
    </section>
  );
}

export default Hero;
