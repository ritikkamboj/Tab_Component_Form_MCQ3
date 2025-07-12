import React from 'react'

function Interests({data , setData}) {
     const {interests} = data ;
  return (
   <>
   <h1>Interests</h1>
   
   <label >
    <input type="checkbox" name ="coding" checked={interests.includes("coding")}/>
    Coding
   </label>
   
   <label >
    <input type="checkbox" name ="music" checked={interests.includes("music")}/>
    Music
   </label>
   
   <label >
    <input type="checkbox" name ="javascript" checked={interests.includes("javascript")}/>
    Javascript
   </label>
   
   </>


  )
}

export default Interests