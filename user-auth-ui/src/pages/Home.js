import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to the User Auth UI</h1>
      <p>This is the home page of the app.</p>
      <div style={styles.linkContainer}>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>
      </div>
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
      color: '#ffffff',
      textAlign: 'center',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box',
    },
    linkContainer: {
      marginTop: '1.5rem',
      display: 'flex',
      gap: '1rem',
    },
    link: {
      padding: '10px 20px',
      fontSize: '1rem',
      fontWeight: 'bold',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: '#ffffff',
      border: '2px solid #ffffff',
      borderRadius: '8px',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },
    linkHover: {
      backgroundColor: '#ffffff',
      color: '#2575fc',
      transform: 'translateY(-2px)',
    },
  };
  
  
  

export default Home;
