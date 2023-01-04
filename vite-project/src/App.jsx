import './App.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import SearchParam from './components/SearchParam';
import Pet from './components/Pet'
import React ,{useState} from 'react';
import {QueryClient , QueryClientProvider  } from "@tanstack/react-query"
import Detail from './Pages/Detail';
import Thank_you_page from './Pages/Thank_you_page';
import PageNotFound from './Pages/PageNotFound';
import { createContext } from 'react';
 export const GlobalInfo =createContext()
 const queryClient = new QueryClient({
  defaultOptions : {
    queries :{
      staleTime :Infinity ,
      cacheTime :Infinity
    }
  }
}) ;



function App() {
  const [adoptedpet, setadoptedpet] = useState(null)
  // console.log(adoptedpet(adoptedpet))
  const Getdata=(itm)=>{
    // console.log(itm)
    setadoptedpet(itm)
   // return itm
    }
    console.log(adoptedpet)
  return (
  <BrowserRouter>
  <QueryClientProvider client ={queryClient}>
 
 <GlobalInfo.Provider value ={{adoptedpet ,Getdata,setadoptedpet }}>
 <Routes> 
    <Route exact path='/' element={< SearchParam />}/>
  <Route exact path="/Detailes/:id" element={< Detail />}/>
  <Route exact path="/Thank_you_page" element={< Thank_you_page />}/>
  <Route exact path="/*" element={< PageNotFound />}/>
  </Routes>
 </GlobalInfo.Provider>
  </QueryClientProvider>
</BrowserRouter>

  );
}
export default App;
