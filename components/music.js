import React, {useState, useEffect} from "react";

const URL_API = "https://www.vagalume.com.br/mattheus-fernandes/index.js";

export default function Music() {
    
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
    <>
      <div>
      {loading && !data && <p>Carregando informações!</p>}
        <ul>
        {data && data.map((item) => (
          <li key={item.id}>{item.desc}</li>
          )) 
        }
        </ul>
      </div>
    </>
  )
}

