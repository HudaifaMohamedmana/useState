import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import EmployeeBadge from './components/EmployeeBadge'
import Workers from './Workers'
import Manager from './Manager'
import ManagerBadge from './components/mangerBadge'

function App() {
  const [currentEmployee,setCurrentEmployee]= useState({})
  const changeEmployee =(Emloyee)=>{
    setCurrentEmployee(Emloyee)
  }

  return (
    <>
    <div className='main'><Navbar/></div>
    <img src={currentEmployee.imge} alt="" />
    <p>{currentEmployee.message}</p>
    <hr />
    <div className='allatone'>
    {Manager.map((staff, i) => (
        <ManagerBadge
          key={i}  
          name={staff.name}
          position={staff.position}
          imge={staff.imge}
          message={staff.message}
          changeEmployee={() =>changeEmployee(staff)}
          />
      ))}

    {Workers.map((staff, i) => (
        <EmployeeBadge
          key={i}  
          name={staff.name}
          position={staff.position}
          imge={staff.imge}
        />
      ))}
    </div>
    </>
  )
}

export default App
