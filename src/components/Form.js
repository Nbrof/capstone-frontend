import React, {useState} from 'react'

const Form = (props) => {
console.log("Testing", props)
  // create a state to hold form data
  const [formData, setFormData] = useState(props.data)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (formData.Mission !== "" && formData.Payload !== "" && formData.Location !== "" && formData.Date !== "") {
      props.handleSubmit(formData)
    }
    setFormData({
        Mission: "",
        Payload: "",
        Date: "",
        Location: "",
    })
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData({...formData, [name]: value})
  }

  return (
    <div className='add-data'>
      <h2>New Data</h2>
      <form onSubmit={handleSubmit}>
        <h4>Mission</h4>
        <input
          type='text'
          name='Mission'
          value={formData.Mission}
          onChange={handleChange}
        />
        <h4>Payload</h4>
        <input
          type='text'
          name='artist'
          value={formData.Payload}
          onChange={handleChange}
        />
        <h4>Location</h4>
        <input
          type='text'
          name='location'
          value={formData.Location}
          onChange={handleChange}
        />
         <h4>Date</h4>
        <input
          type='text'
          name='date'
          value={formData.Date}
          onChange={handleChange}
        />
        
        <br/>
        <input 
          type='submit'
          value='Submit new Data'
        />
      </form>
    </div>
  )
}

export default Form