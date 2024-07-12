import React, { useState } from 'react';

const Welcome = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoginState = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      {isLoggedIn ? <h1>Welcome, Friend!</h1> : <h1>Please log in</h1>}
      <button onClick={toggleLoginState}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </>
  );
};

export default Welcome;
