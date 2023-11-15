import React, { useState } from 'react';
import { registerUser } from './Api';

function Register() {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleRegister = async () => {
    try {
      const data = await registerUser({ newUsername, newPassword });
      console.log('Registration successful. Data from API:', data);
      // Optionally, you can switch to the login form after successful registration
    } catch (error) {
      // Handle error, for example, display an error message to the user
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <label>
        New Username:
        <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
      </label>
      <br />
      <label>
        New Password:
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
