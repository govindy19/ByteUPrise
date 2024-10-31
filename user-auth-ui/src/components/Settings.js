import React, { useState } from 'react';

const Settings = () => {
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    alert('Password changed successfully!');
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>Upload Avatar:</label>
        <input type="file" onChange={handleAvatarChange} />
        {avatar && <p>Selected file: {avatar.name}</p>}
      </div>
      <form onSubmit={handlePasswordChange}>
        <div>
          <label>New Password:</label>
          <input type="password" name="newPassword" />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default Settings;
