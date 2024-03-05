import {useState, useEffect} from "react"
import './App.css';

function App() {
  
  const [data, setData]=useState([])
  const fetchData=()=>{
    fetch(`https://dummyjson.com/users`)
    .then((response)=>response.json())
    .then((actualdata)=> {
      
      setData(actualdata.users)
    })
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      <table border={1}>
        <tr>
          <th>FirstName</th>
          <th>Age</th>
          <th>image</th>
          <th>phone</th>
          <th>email</th>
         
        </tr>
        {data?.map((item,index)=>(
            <tr key={index}>
             
              <td>{item.firstName}</td>
              <td>{item.age}</td>
              <td><img src={item.image} alt=" " height="100px"/></td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
            </tr>
        ))}
      </table>
    </div>
  )
}

export default App;
