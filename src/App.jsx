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



    </>
  )
}

export default App
