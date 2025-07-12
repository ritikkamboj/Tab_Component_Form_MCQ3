import './App.css'
import Profile from './Profile'
import Interests from './Interests'
import Settings from './Settings'
import { useState } from 'react'

function App() {

  const [data, setData] = useState({
    name: "ritik",
    age: 26,
    email: "ritik@gmail.com",
    interests: ['coding', 'music'],
    settings: "dark"
  })


  const [errors, setErrors] = useState({

  })
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [{
    name: "profile",
    component: Profile,
    validate: () => {
      let err = {};
      if (!data.name || data.name.length < 2) {
        err.name = "Please enter the suitable lenght "
      }
      if (!data.age || data.age < 18) {
        err.age = " Enter age must be 18 or greater "
      }
      if (!data.email || data.email < 2) {
        err.email = "Please email and must be valid format "
      }

      setErrors(err);

      return err.name || err.age || err.email ? true : false ;


    }
  }, {
    name: "interest",
    component: Interests,
     validate: () => {
      let err = {};
      if (!data.interests || data.interests.length < 1) {
        err.interests = "Please enter the more than one intrests "
      }

      setErrors(err);
      return err.interests ? true : false ;
    }
    
  },
  {
    name: "setting",
    component: Settings,
    validate : () =>{
      return ;
    }
  }]

  function handleNext() {
    if(!tabs[activeTab].validate())
    {
          setActiveTab(prev => prev + 1)


    }

  }
  function handlePrev() {
    setActiveTab(prev => prev - 1)
  }

  function handleSubmit() {
    // setActiveTab()
    console.log(data)

  }
  let ActiveComponent = tabs[activeTab].component;


  return (
    <>
      <h1 className='heading-main'>Tab Form </h1>
      <div className='heading-container'>

        {tabs.map((item, index) => <div className='heading' onClick={() => !tabs[activeTab].validate()  && setActiveTab(index)} key={item.name}> {item.name}</div>)}

      </div>
      <div className='active-tab'>
        <ActiveComponent data={data} setData={setData} errors={errors} />

      </div>

      {activeTab > 0 && <div style={{ textAlign: "center" }}>
        <button onClick={handlePrev}>Prev</button>
      </div>
      }
      {activeTab < tabs.length - 1 && <div style={{ textAlign: "center" }}>
        <button onClick={handleNext}>Next</button>
      </div>
      }
      {activeTab === tabs.length - 1 && <div style={{ textAlign: "center" }}>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      }



    </>
  )
}

export default App
