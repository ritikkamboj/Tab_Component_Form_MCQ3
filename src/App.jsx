import './App.css'
import Profile from './Profile'
import Interests from './Interests'
import Settings from './Settings'
import { useState } from 'react'

function App() {

  const [activeTab , setActiveTab] = useState(1)

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

        {tabs.map((item) => <div className='heading' key={item.name}> {item.name}</div>)}

      </div>
      <div>
        <ActiveComponent/>

      </div>



    </>
  )
}

export default App
