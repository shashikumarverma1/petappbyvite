const FetchPet = async(id)=>{
     // const {id} = queryKey[1]
        let res=await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)
        let resdata =await res.json()
       // console.log(resdata)
       return resdata
      

}
export default FetchPet ;