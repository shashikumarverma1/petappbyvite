import { useQuery } from "@tanstack/react-query"
export const usebreedlist=({queryClient})=>{
    const {animal} =queryClient[1]
    const breedList=useQuery(["breed" , animal ] ,async ()=>{
        const  breeddata =await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
        let resbreed =await breeddata.json()
        console.log("breed" ,resbreed.breeds)
        let res_data=resbreed.breeds
        return res_data
     })
}
