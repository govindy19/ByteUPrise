import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
  });

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  // Internal styles for responsive and attractive layout
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #4b79a1, #283e51)',
      padding: '20px',
      boxSizing: 'border-box',
    },
    form: {
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    label: {
      fontWeight: 'bold',
      color: '#333',
    },
    input: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '1rem',
      transition: 'border 0.3s ease',
    },
    inputFocus: {
      borderColor: '#4b79a1',
      outline: 'none',
    },
    button: {
      padding: '10px',
      fontSize: '1rem',
      backgroundColor: '#4b79a1',
      color: '#ffffff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#355b76',
    },
    error: {
      color: '#e74c3c',
      fontSize: '0.875rem',
    },
  };

  return (
    <div style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldTouched }) => (
          <Form style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email:</label>
              <Field
                type="email"
                name="email"
                style={styles.input}
                onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus }}
                onBlur={(e) => setFieldTouched('email', true)}
              />
              <ErrorMessage name="email" component="div" style={styles.error} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Password:</label>
              <Field
                type="password"
                name="password"
                style={styles.input}
                onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus }}
                onBlur={(e) => setFieldTouched('password', true)}
              />
              <ErrorMessage name="password" component="div" style={styles.error} />
            </div>
            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) => e.target.style = { ...styles.button, ...styles.buttonHover }}
              onMouseOut={(e) => e.target.style = styles.button}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
