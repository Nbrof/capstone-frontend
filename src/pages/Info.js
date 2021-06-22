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
      setDatalist(data.body)
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
    fetch(url + satData.Id, {
      method: 'delete'
    })
    .then(()  => getData())
  }

  const loaded = () => (
    <div>
        {datalist.map((satdata) => (
        <div>
            <h3>{satdata.Mission}</h3>
            <h3>{satdata.Payload}</h3>
            <h4>{satdata.Date}</h4>
            <h4>{satdata.Location}</h4>
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

return datalist.length > 0 ? loaded() : loading()
}

export default Info