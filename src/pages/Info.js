import React from 'react';
import { useState, useEffect } from "react";
import Form from "../components/Form"



const Info = (props) => {
   
    const url = "https://localhost:5001/data"
   
const [datalist, setDatalist] = useState([]);

const emptySat = {
    mission: "",
    payload: "",
    date: "",
    location: "",

    
    
}

const getData = () => {
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log("getData", data)
      setDatalist(data)
    })
  }

useEffect(() => getData(), [])

const handleSubmit = (newData) => {
    console.log('New data ', newData)
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
    .then(() => getData())
  }

  const handleDelete = (satData) => {
    fetch(url + "/" + satData.id, {
      method: 'delete'
    })
    .then(()  => getData())
  }

  const loaded = () => (
    <div>
        {datalist.map((satdata) => (
        <div>
            <h3>{satdata.mission}</h3>
            <h3>{satdata.payload}</h3>
            <h4>{satdata.date}</h4>
            <h4>{satdata.location}</h4>
            <button onClick={() => handleDelete(satdata)}>Delete Section</button>
        </div>
    ))}
    <Form data={emptySat} handleSubmit={handleSubmit}/>
    </div>
);

const loading = () => (
  <div>
      <h1>Loading...</h1>
  </div>
)

// return <h1>Test</h1>
return datalist.length > 0 ? loaded() : loading()
}

export default Info