import React, { useState ,useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FetchPet from "../components/FetchPet";
import { useNavigate } from "react-router-dom";
import { GlobalInfo } from "../App";
const Detail = () => {
  const [showModal, setshowModal] = useState(false);
  const navigate = useNavigate();
  const [imgs, setimgs] = useState("");
   const data=useContext(GlobalInfo)
  //  console.log(data)
  const { id } = useParams();
  const results = useQuery(
    ["detail", id],
    // tradintional method*******************
    //  async()=>{
    //   let res=await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)
    //   let resdata =await res.json()
    //  // console.log(resdata)
    //  return resdata
    // }******************
    () => FetchPet(id)
  );
    



  let pets = results?.data?.pets[0];
  //  console.log(pets?.name)
  if (results.isLoading) {
    return <h1 className=" m-5">Loading....</h1>;
  }
 console.log(data)
  return (
    <div className="border w-75 m-5 p-3">
      <div className="d-flex m-4">
      {
      showModal ? <div style={{position : "fixed"  , left : "30vw" , top :"30vh"}}>
       <div className='bg-danger p-3'>
        <h4> do you really want to Adopt {pets.name} ?</h4>
        <div className="text-center">
          <button className="m-2 btn btn-primary" onClick={()=>{
            console.log(data)
            data.Getdata(pets)
            navigate('/Thank_you_page')}}> YES</button>
          <button  className="m-2 btn btn-primary" onClick={()=>setshowModal(false)}> NO</button>
        </div>
       </div>
      
      </div> :null
     }
        <div>
          <img
            src={imgs === "" ? pets?.images[0] : imgs}
            alt={pets?.name}
            style={{ width: 150, hiegth: 150, borderRadius: 5, margin: 20 }}
          />
        </div>
        <div>
          {pets.images.map((e, i) => {
            return (
              <img
                src={e}
                alt={pets?.name}
                key={i}
                style={{ width: 80, hiegth: 80, borderRadius: 50, margin: 8 }}
                onClick={() => setimgs(e)}
              />
            );
          })}
        </div>
      </div>
      <button
        className=" btn btn-danger ml-5"
        onClick={() => setshowModal(!showModal)}
      >
        {" "}
        Adopt {pets.name}
      </button>
      <div className="text-center w-100 m-2 d-flex " style={{ margin: "auto" }}>
        <div className="w-25 m-2">
          <h4>{pets.name}</h4>
          <h4>{pets.animal}</h4>
          <h5>{pets.breed}</h5>
        </div>
        <div className="w-75 m-2">
          <p>{pets.description}</p>
        </div>
      </div>
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};

export default Detail;
