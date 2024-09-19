import React from 'react'

function MangerBadge({name,imge,position,message,changeEmployee}) {
  return (
    <div className='carde'>
        <img src={imge} className='img' alt="" />
        <div>{name}</div>
        <div>{position}</div>
        <button onClick={()=>changeEmployee({
          name: name,
          position:position,
           message: message,
          imge:imge
         
        })}>call me</button>
    </div>
  )
}

export default MangerBadge