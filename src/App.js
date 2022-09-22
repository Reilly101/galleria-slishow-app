import Card from "./Card.js";
import data from "./data.json";
import CardPreview from "./CardPreview.js";
import { useState } from "react";
import './App.css'


export default function App() {
  let [preview,setPreview] = useState(-1)

  function handleArrows(dir){
    setPreview(preview + dir)
  }
  return (
    preview>=0?
    <CardPreview 
      data={data[preview]} 
      click={()=> setPreview(-1)}
      move={handleArrows}
    index={preview}
    />
    :
    <div className='main-container'>
      {data.map((image, index) => (
        <Card click={()=>setPreview(index)}  image={image}  />

      ))}
    </div>
  );
}
