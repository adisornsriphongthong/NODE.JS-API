import { useEffect, useState } from 'react'
import './App.css'

function App() { 
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api1', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      if(response.ok) {
        const data = await response.json();
        setData(data);
        console.log(data.quote)
      }

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      {data.quote}
    </div>
  )
}

export default App
