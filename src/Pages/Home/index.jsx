import { useState, useEffect} from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import React from "react"

const Home = () => {
  const [items, setItems] = useState(null)

  useEffect(()=> {
    fetch('https://api.escuelajs.co/api/v1/products').then(response => response.json()).then(data => setItems(data))
  }, [])

  return (
    <>
      <Layout>
        <div className="grid gap-4 grid-cols-6 w-full max-w-screen-2xl">
            {items?.map(item => (
                <Card key={item.id} data={item}/>
            ))}
        </div>
      </Layout>
    </>
  )
}

export default Home
