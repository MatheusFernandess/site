import React, {useState, useEffect} from "react";

import Header from "../components/header"
import Footer from "../components/footer"


const URL_API = "https://www.vagalume.com.br/mattheus-fernandes/index.js";

export default function musicas() {
    
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    const fetchAllData = async () => {
      try{
        setLoading(true)

        const response = await fetch(URL_API)
        const propertyValues = await response.json()
        const data = Object.values(propertyValues.artist.lyrics.item);
        
        console.log(data)
        if(!data)
          throw 'Nenhuma musica encontrada!'
        
        setData(data)
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
        <p key={item.id}> 
          {item.desc}
        </p>
     
     )) 
      }
      </>
      <Footer/>
    </div>
  )
}

