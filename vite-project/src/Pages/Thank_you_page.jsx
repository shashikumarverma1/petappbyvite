import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalInfo } from '../App'
const Thank_you_page = () => {
  const {Getdata, adoptedpet}=useContext(GlobalInfo)
    const navigate = useNavigate()
    console.log( "adoptef", adoptedpet)
  return (
    <div className='text-center mt-5 p-5 '>
        <h1 className=''>Thank you for adopting <b style={{color:"green"}}>{adoptedpet.name}</b></h1>
        <div>
          <div className='d-flex  justify-content-center'>
          
            {
                adoptedpet.images.map((e,i)=>{
                  return (
                    <div className='d-flex'>
                      <img src={e} key ={i} alt={adoptedpet.name} 
                      style={{width :150 ,diplay :"flex", hieght :50 , borderRadius:30 , margin :10}}/>
                    </div>
                  )
                })
              }
          </div>
         <div className='m-3'>
         <h5>{adoptedpet.name}</h5>
          <h5>{adoptedpet.breed}</h5>
          <h5>{adoptedpet.animal}</h5>
         </div>
        
        </div>
        <button className='btn  btn-primary mt-3' onClick={()=>navigate("/")}>Go back to Home Page</button>
         </div>
  )
}

export default Thank_you_page