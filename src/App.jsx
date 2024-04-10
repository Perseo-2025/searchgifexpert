import { useState } from "react";
import {AddCategory, GifGride } from "./components";


function App() {

  const [categories, SetCategories] = useState([ 'One punch']);

  const onAddCategory = (e) => {
    if(categories.includes(e)) return;
    SetCategories( [ e, ...categories  ] );
  }

  return (
    <>
      <div className="bg-indigo-600 p-5 md:flex justify-center">
        <h1 className=' md:flex justify-center text-white font-bold text-2xl mr-2'>Empieza a Buscar tu Gif Favorito<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>  
        </h1>
        {/* formulario input */}
        <AddCategory 
          //setCategories={SetCategories} 
          onNewCategory={onAddCategory}
          
        />
        
      </div>
      
      {/* <button onClick={onAddCategory}
      className="bg-red-600 p-2 rounded-sm text-white mt-5 hover:bg-red-500">
      Buscar
      </button> */}

     
        {categories.map( category => (
            <GifGride 
              key={category} 
              category={category}
            />
        ))
        }
      

    </>
  )
}

export default App
