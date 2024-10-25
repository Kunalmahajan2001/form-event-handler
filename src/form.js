import React, { useState } from 'react';
import './Form.css'; 

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    const obj = {
      name,
      email,
      password,
      city,
      gender,
    };
    localStorage.setItem('employee', JSON.stringify(obj));
    console.log(obj);
    setName('');
    setEmail('');
    setPassword('');
    setCity('');
    setGender('');
  };

  return (
    <>
      
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Select city</option>
          <option value="delhi">Delhi</option>
          <option value="surat">Surat</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>
          Male
          <input
            type="radio"
            value="male"
            name="gender"
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
          />
        </label>
        <label>
          Female
          <input
            type="radio"
            value="female"
            name="gender"
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;

<a href=''></a>