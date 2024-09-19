import React from 'react'

function EmployeeBadge({name,imge,position}) {
  return (
    <div className='carde'>
        <img src={imge} className='img' alt="" />
        <div>{name}</div>
        <div>{position}</div>
        
    </div>
  )
}

export default EmployeeBadge