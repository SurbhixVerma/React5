import React, { useState } from 'react';
import './App.css';

const AgeCalculator = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [age, setAge] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(selectedDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '60%', textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1>Age Calculator</h1>
        <h4>Enter your date of birth</h4>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', width: '100%' }}>
          <input type="date" value={selectedDate} onChange={handleDateChange} />
        </div>
        <button style={{ backgroundColor: 'blue', color: 'black', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '14px' }} onClick={calculateAge}>
          Calculate age
        </button>
        {age !== null && <p style={{ fontWeight: 'bold', marginTop: '20px' }}>You are {age} years old</p>}
      </div>
    </div>
  );
};

export default AgeCalculator;
