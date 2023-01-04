import React from 'react'
import { useNavigate } from 'react-router-dom'
const PageNotFound = () => {
    const navigate =useNavigate()
  return (
    <h1 className='text-center mt-5' ><b>PageNotFound</b><br/>
     <button className='btn btn-primary mt-5' onClick={()=>navigate(-1)}>Go back</button>
    </h1>
  )
}

export default PageNotFound