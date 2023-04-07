import { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";

function ContactForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [medical_history, setMedical_History] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       const response = await axios.post('http://localhost:5000/send-mail', {
         name,
         age,
         gender,
         medical_history,
         predicted_disease:localStorage.getItem('disease'),
         predicted_drug:localStorage.getItem('drug'),
       });
       console.log(response.data); // or do something else with the response
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="content">
    <h3>Enter your details:</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label style={{margin: "1.5rem" , color: '#000000',backgroundColor: 'transparent'}} htmlFor="name">Name:</label>
        <input
         style={{margin: "1rem" , color: '#000000'}}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br></br>
      <div>
        <label style={{margin: "1.5rem" , color: '#000000'}}  htmlFor="age">Age:</label>
        <input style={{marginLeft:'1.75rem'}}
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <br></br>
      <div>
        <label style={{margin: "1.5rem" , color: '#000000'}}  htmlFor="gender">Gender:</label>
        <select style={{ marginLeft:'.5rem',border: '2px solid red',backgroundColor: 'transparent' }} id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">-- Please select a gender --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <br></br>
      <div>
        <label style={{margin: "1.5rem" , color: '#000000'}}  htmlFor="medical-history">Previous Medical History:</label>
        <textarea style={{marginTop: "1rem"}}
          id="medical-history"
          value={medical_history}
          onChange={(e) => setMedical_History(e.target.value)}
        />
      </div>
      <br></br>
      <button style={{  marginLeft:'40rem',marginRight:'3px',backgroundColor: '#FFCCCB', border: '2px solid white', width:'90px',height:'25px', borderRadius: '10px' }} type="submit">Send Email</button>
    </form>
    </div>
  );
}

export default ContactForm;
