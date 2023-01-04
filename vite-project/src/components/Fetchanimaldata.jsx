import { useQuery } from "@tanstack/react-query";
  const FetchAnimalData = async(animal ,location , breed)=>{
    // const {animal ,location ,breed } =queryClient[1]
      let url = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;
        let res = await fetch(url);
        let data = await res.json();
        // console.log("resultee" ,data.pets)
        return data
    }
  
  export default FetchAnimalData