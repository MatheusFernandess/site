import React, {useState, useEffect} from "react";

import Header from "../components/header"
import Footer from "../components/footer"

const URL_API = "https://suite.staging.linximpulse.net/impulse/montecarlo/flags.json";

export default function flags() {
    
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  const fetchAllData = async () => {
    try{
      setLoading(true)

      const response = await fetch(URL_API)
      const data = await response.json()
      
      console.log([data])
      if(!data)
        throw 'Nenhuma musica encontrada!'
      
      setData([data])
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }  

  useEffect(() =>{
    fetchAllData()
  }, [])  

return (
  <div>
    <Header/>
    <>
    {loading && !data && <p>Carregando informações!</p>}

    {data && data.map((item) => (
      <ul> 
        <li key="{item.id}">{item.platformProvider}</li>
        </ul>      
     )) 
    }
    </>
    <Footer/>
  </div>
)
}

