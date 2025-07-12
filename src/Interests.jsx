import React from 'react'

function Interests({data , setData}) {
     const {interests} = data ;

     function handleInterests(e)
     {
        setData((prevState)=> {
            return {
                ...prevState , interests : e.target.checked ? [...prevState.interests , e.target.name] : prevState.interests.filter((item)=> item !== e.target.name)
            }
        })

     }

    //  console.log(interests)
  return (
   <>
   <h1>Interests</h1>
   
   <label >
    <input type="checkbox" name ="coding" checked={interests.includes("coding")}  onChange={handleInterests}/>
    Coding
   </label>
   
   <label >
    <input type="checkbox" name ="music" checked={interests.includes("music")}  onChange={handleInterests}/>
    Music
   </label>
   
   <label >
    <input type="checkbox" name ="javascript" checked={interests.includes("javascript")}  onChange={handleInterests}/>
    Javascript
   </label>
   
   </>


  )
}

export default Interests