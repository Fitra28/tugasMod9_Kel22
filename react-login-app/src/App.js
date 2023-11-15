import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import UserManagementSystem from './Home';
import { loginUser } from './Api';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([]);

  const handleLogin = async (credentials) => {
    try {
      const data = await loginUser(credentials);
      console.log('Login successful. Data from API:', data);

      setLoggedInUser(credentials.username);
    } catch (error) {
      // Handle error, for example, display an error message to the user
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const handleAddUser = (newUser) => {
    const newUserId = users.length + 1;
    setUsers([...users, { id: newUserId, username: newUser.newUsername }]);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleEditUser = (userId, newUsername) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, username: newUsername } : user
      )
    );
  };

  return (
    <div>
      {loggedInUser ? (
        <UserManagementSystem
          users={users}
          onLogout={handleLogout}
          onAddUser={handleAddUser}
          onDeleteUser={handleDeleteUser}
          onEditUser={handleEditUser}
        />
      ) : (
        <div>
          <Login onLogin={handleLogin} />
          <br />
          <Register />
        </div>
      )}
    </div>
  );
}

export default App;
