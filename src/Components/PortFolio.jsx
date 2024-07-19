import React from "react";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import Project4 from "../assets/Project4.png";

function PortFolio() {
  return (
    <>
      <hr />
      <div
        name="Portfolio"
        className=" m-20 max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <div className="grid justify-items-center pr-90  m-10">
          <h1 className="text-3xl text-black font-bold  mt-10">Projects</h1>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-10 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:mx-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Google-Maps API
                  </div>
                  <p className="mt-2 text-slate-500">
                    Google Maps API using Tailwind CSS and react.js. Google-Map
                    is a web service that provides detailed information about
                    geographical regions and sites worldwide.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src={Project1} alt="Project1" width={150} height={150} />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:mx-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Weather App
                  </div>
                  <p className="mt-2 text-slate-500">
                    Creating a weather app using React involves building a
                    responsive user interface that fetches weather data from a
                    weather API (like OpenWeatherMap or Weatherstack) and
                    displays it intuitively.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src={Project2} alt="Project2" width={150} height={150} />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-10 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:mx-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Landing Page
                  </div>
                  <p className="mt-2 text-slate-500">
                    Creating a landing page using React with Tailwind CSS allows
                    us to build a responsive and visually appealing web page
                    efficiently. Tailwind CSS provides utility classes that
                    enable rapid styling without writing custom CSS, making it
                    ideal for quickly prototyping and developing UI components.
                    
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src={Project3} alt="Project3" width={150} height={150} />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:mx-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Shopify Store
                  </div>
                  <p className="mt-2 text-slate-500">
                    Creating a Shopify store project using React typically
                    involves building a frontend interface that interacts with
                    Shopify's backend APIs. This includes developing components
                    for product listings, cart functionality, checkout
                    processes, and user authentication.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src={Project4} alt="Project4" width={150} height={150} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortFolio;
