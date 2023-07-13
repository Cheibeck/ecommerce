import { useState, useEffect} from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import React from "react"
import Details from "../../Components/Details"
import "./home.css"

const Home = () => {
  const [items, setItems] = useState(null)

  // useEffect(()=> {
  //   fetch('https://api.escuelajs.co/api/v1/products').then(response => response.json()).then(data => setItems(data))
  // }, [])
  
  useEffect(()=> {
    fetch("./src/api/DB.json").then(response => response.json()).then(data => setItems(data))
  }, [])

  return (
    <>
      <Layout>
        <div className="layout grid w-full max-w-screen-2xl">
            {items?.map(item => (
                <Card key={item.id} data={item}/>
            ))}
        </div>
        <Details />
      </Layout>
    </>
  )
}

export default Home
