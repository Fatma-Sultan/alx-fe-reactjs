// src/App.jsx
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikRegistrationForm from './components/FormikRegistrationForm';

function App() {
  return (
    <div>
      <h1>User Registration Form</h1>
      <RegistrationForm />
      <h1>User Registration Form (Formik)</h1>
      <FormikRegistrationForm />
    </div>
  );
}

export default App;