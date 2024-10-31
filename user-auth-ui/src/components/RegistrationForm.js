import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  // Inline styles for responsive and attractive layout
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
      padding: '20px',
    },
    formContainer: {
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
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
      fontSize: '0.9rem',
    },
    input: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '1rem',
      transition: 'border 0.3s ease',
    },
    inputFocus: {
      borderColor: '#6a11cb',
      outline: 'none',
    },
    button: {
      padding: '10px',
      fontSize: '1rem',
      backgroundColor: '#6a11cb',
      color: '#ffffff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#531fb3',
    },
    error: {
      color: '#e74c3c',
      fontSize: '0.875rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Register</h2>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldTouched }) => (
            <Form>
              <div style={styles.formGroup}>
                <label style={styles.label}>Username:</label>
                <Field
                  type="text"
                  name="username"
                  style={styles.input}
                  onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
                  onBlur={(e) => {
                    setFieldTouched('username', true);
                    e.target.style.borderColor = '#ddd';
                  }}
                />
                <ErrorMessage name="username" component="div" style={styles.error} />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email:</label>
                <Field
                  type="email"
                  name="email"
                  style={styles.input}
                  onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
                  onBlur={(e) => {
                    setFieldTouched('email', true);
                    e.target.style.borderColor = '#ddd';
                  }}
                />
                <ErrorMessage name="email" component="div" style={styles.error} />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Password:</label>
                <Field
                  type="password"
                  name="password"
                  style={styles.input}
                  onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
                  onBlur={(e) => {
                    setFieldTouched('password', true);
                    e.target.style.borderColor = '#ddd';
                  }}
                />
                <ErrorMessage name="password" component="div" style={styles.error} />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Confirm Password:</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  style={styles.input}
                  onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
                  onBlur={(e) => {
                    setFieldTouched('confirmPassword', true);
                    e.target.style.borderColor = '#ddd';
                  }}
                />
                <ErrorMessage name="confirmPassword" component="div" style={styles.error} />
              </div>

              <button
                type="submit"
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
