import './App.css'
import Profile from './Profile'
import Interests from './Interests'
import Settings from './Settings'
import { useState } from 'react'

function App() {

  const [data , setData] = useState({
    name : "ritik",
    age : 26 ,
    email : "ritik@gmail.com",
    interests : ['coding', 'music'],
    settings : "dark"
  })

  const [activeTab , setActiveTab] = useState(0)

  const tabs = [{
    name: "profile",
    component: Profile
  }, {
    name: "interest",
    component: Interests
  },
  {
    name: "setting",
    component: Settings
  }]

  function handleNext()
  {
    setActiveTab(prev => prev + 1)

  }
  function handlePrev()
  {
    setActiveTab(prev => prev - 1)
  }

  function handleSubmit()
  {
    // setActiveTab()
    console.log(data)

  }
let ActiveComponent = tabs[activeTab].component ;


  return (
    <>
      <h1 className='heading-main'>Tab Form </h1>
      <div className='heading-container'>

        {tabs.map((item , index) => <div className='heading' onClick={()=> setActiveTab(index)} key={item.name}> {item.name}</div>)}

      </div>
      <div className='active-tab'>
        <ActiveComponent data={data} setData={setData}/>

      </div>

     {activeTab > 0  &&  <div style={{textAlign: "center"}}>
        <button onClick={handlePrev}>Prev</button>
      </div>
      }
       {activeTab < tabs.length -1  &&  <div style={{textAlign: "center"}}>
        <button onClick={handleNext}>Next</button>
      </div>
      }
       {activeTab === tabs.length -1  &&  <div style={{textAlign: "center"}}>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      }
    
    

    </>
  )
}

export default App
