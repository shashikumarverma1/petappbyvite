import React, { useState } from "react";
import { useEffect } from "react";
import Pet from "./Pet";
import { usebreedlist } from "./usebreedlist";
//import Result from './Result'
import { useQuery } from "@tanstack/react-query";
import FetchAnimalData from "../components/Fetchanimaldata";
const SearchParam = () => {
  const [location, setlocation] = useState("");
  const [animal, setanimal] = useState("");
  const [breed, setbreed] = useState("");
  let animalname = ["bird", "cat", "dog", "reptile", "rabbit"];


const resultee = useQuery( ["my-key" ,animal ,location ,breed ],
  
  ()=>  FetchAnimalData(animal ,location ,breed),
  {
    enabled: false,
  }
  );

   console.log(resultee?.data?.pets)
const { data, refetch } = useQuery(["my_key",animal], async()=>{
  const  breeddata =await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
  let resbreed =await breeddata.json()
  // console.log("breed" ,resbreed.breeds)
  let res_data=resbreed.breeds
  console.log(res_data)
  return res_data
}, {
  refetchOnWindowFocus: true,

});
  
   

  return (
    <div className="m-5 ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          resultee.refetch()
          // console.log(location, breed, animal);
        }}
      >
        <label>
          Location
          <input
            type="text"
            value={location}
            onChange={(e) => {
              setlocation(e.target.value);
            }}
          />
        </label>
        <label>
          animal
          <select
            onChange={(e) => {
              setanimal(e.target.value);
              setbreed("")
              // refetch();
              console.log(e.target.value)
                  //  setbreedname(data)
              console.log("refetc")
            }}
          >
            <option />
            {animalname.map((e, i) => {
              return <option key={i}>{e}</option>;
            })}
          </select>
        </label>
        <label>
          breed
          <select
            onChange={(e) => {
              setbreed(e.target.value);
              // console.log(e.target.value);
            }}
            style={{width : 80}}
          >
            <option  />
            {data?.map((e, i) => {
              return <option key={i}>{e}</option>;
            })}
          </select>
        </label>
        <button
          className="m-1"
          type="Submit"
        
        >
          SearchPet
        </button>
      </form>
      <div className=" ">
       
       {
         resultee?.data?.pets.length > 0 ? ( resultee?.data?.pets.map((e, i) => {
          // console.log(e.id)
          return (
            <div key={i}>
              <Pet
                name={e.name}
                animal={e.animal}
                breed={e.breed}
                id={e.id}
                key={e.id}
                images={e.images}
                description={e.description}
              />
            </div>
          );
        })) : <h5 className="text-center m-5">No data found</h5>
        }
      </div>

    </div>
  );
};

export default SearchParam;
