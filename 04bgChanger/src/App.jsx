import { useState } from "react";

// import React from "react";
function App() {
  const [color, setColor]= useState("olive")
  return(
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-2 rounded-3xl">
          <button
          onClick={() => setColor("#1C352D")}
           className="outline-none px-5 py-2 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#1C352D"}}>green</button>

          <button
          onClick={() => setColor("#715A5A")}
          className="outline-none px-5 py-2 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#715A5A"}}>lCoffee</button>

          <button
          onClick={() => setColor("#8C1007")}
          className="outline-none px-5 py-2 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#8C1007"}}>maroon</button>

          <button
          onClick={() => setColor("#435585")}
          className="outline-none px-5 py-2 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#435585"}}>gray</button>

          <button
          onClick={() => setColor("#E19898")}
          className="outline-none px-5 py-2 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#E19898"}}>peach</button>

          <button
          onClick={() => setColor("#A2678A")}
          className="outline-none px-5 py-2 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#A2678A"}}>dPeach</button>

          <button
          onClick={() => setColor("#393053")}
          className="outline-none px-5 py-2 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#393053"}}>dark</button>

          <button
          onClick={() => setColor("#F5EEE6")}
          className="outline-none px-5 py-2 rounded-full text-black shadow-lg"
          style={{backgroundColor:"#F5EEE6"}}>whiteish</button>

       
        </div>
      </div>
    </div>
  )
  
}
export default App;