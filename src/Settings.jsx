import React from 'react'

function Settings({data , setData}) {

    const {settings} = data

    function handleRadio(e)
    {
        setData((prevState) => {
            return {
                ...prevState , settings : e.target.name
            }
        })


    }
  return (
    <>
    <h1>Settings</h1>
    <div>
        <label>
            <input type="radio" name='dark' checked={settings=== "dark"} onChange={handleRadio} />
            Dark
        </label>
           <label>
            <input type="radio" name='light' checked={settings=== "light"} onChange={handleRadio} />
            Light
        </label>
    </div>
    </>
  )
}

export default Settings