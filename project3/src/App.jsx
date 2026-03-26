import { useState } from 'react'

function App() {
const [color,setColor]=useState("olive");
  return (
    <>  
    <div className="w-full h-screen duration-200"
    style={{
      backgroundColor:color
    }} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
          <button onClick={()=>setColor("red")} className="outline-none w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-500 text-white shadow-xl">Red</button>
          <button onClick={()=>setColor("green")} className="outline-none w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500 text-white shadow-xl">Green</button>
          <button onClick={()=>setColor("blue")} className="outline-none w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500 text-white shadow-xl">Blue</button>
          <button onClick={()=>setColor("orange")} className="outline-none w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-500 text-white shadow-xl">Orange</button>
          <button onClick={()=>setColor("olive")} className="outline-none w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-yellow-500 text-white shadow-xl">Olive</button>
          <button onClick={()=>setColor("pink")} className="outline-none w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-pink-500 text-white shadow-xl">Pink</button>
          <button onClick={()=>setColor("purple")} className="outline-none w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-500 text-white shadow-xl">Purple</button>
          <button onClick={()=>setColor("cyan")} className="outline-none w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-cyan-400 text-white shadow-xl">Cyan</button>
        </div>
      </div>
    </div> 
      
    </>
  )
}

export default App
