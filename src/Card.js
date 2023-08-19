import React, { useState } from 'react'; // Don't forget to import React
import './Card.css';

function Card({ user }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="singleCard">
      <img src={user.avatar} alt="User's Avatar" />
      <p>First name: {user.first_name}</p>
      <p>Last name: {user.last_name}</p>
      <p>Credit card: {user.credit_card.cc_number}</p>
      <div className="address">
        <span className="location-icon">&#x1F4CD;</span> {/* Location icon */}
        <p>Address: {user.address.city}</p>
      </div>
      
      <p>
        {showPassword ? user.password : '******'}
        <button onClick={togglePasswordVisibility} className='bttn'>
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </p>
    </div>
  );
}

export default Card;
