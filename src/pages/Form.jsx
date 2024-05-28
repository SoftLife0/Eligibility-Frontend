import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Info from '../components/Info';
import CoreSubjectField from '../components/CoreSubjectField';
import ElectiveSubjectField from '../components/ElectiveSubjectField';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';
import config from '../components/config';
import SubmitButton from '../components/Button';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [courseOffered, setCourseOffered] = useState('');
  const [loading, setLoading] = useState(false);
  const [coreSubjects, setCoreSubjects] = useState({
    Mathematics: '',
    English: '',
    Science: '',
    'Social Studies': ''
  });
  const [electives, setElectives] = useState({
    'First Elective': '',
    'Second Elective': '',
    'Third Elective': '',
    'Fourth Elective': ''
  });
  const [electiveGrades, setElectiveGrades] = useState({
    'First Elective Grade': '',
    'Second Elective Grade': '',
    'Third Elective Grade': '',
    'Fourth Elective Grade': ''
  });

  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleCourseOfferedChange = (event) => {
    setCourseOffered(event.target.value);
  };

  const handleCoreGradeSelect = (subject, grade) => {
    setCoreSubjects((prevCoreSubjects) => ({
      ...prevCoreSubjects,
      [subject]: grade
    }));
  };

  const handleElectiveChange = (elective, value) => {
    setElectives((prevElectives) => ({
      ...prevElectives,
      [elective]: value
    }));
  };

  const handleElectiveGradeChange = (elective, grade) => {
    setElectiveGrades((prevElectiveGrades) => ({
      ...prevElectiveGrades,
      [elective]: grade
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true);

    // Basic validation
    if (!name || !number || !courseOffered) {
      alert('Please fill out all required fields.');
      setLoading(false);
      return;
    }

    const formData = {
      name,
      number,
      courseOffered,
      Course: courseOffered,
      mathsScore: coreSubjects['Mathematics'],
      englishScore: coreSubjects['English'],
      scienceScore: coreSubjects['Science'],
      socialScore: coreSubjects['Social Studies'],
      el1: electives['First Elective'],
      el1grade: electiveGrades['First Elective Grade'],
      el2: electives['Second Elective'],
      el2grade: electiveGrades['Second Elective Grade'],
      el3: electives['Third Elective'],
      el3grade: electiveGrades['Third Elective Grade'],
      el4: electives['Fourth Elective'],
      el4grade: electiveGrades['Fourth Elective Grade']
    };

    // Example of logging the form data
    console.log('Form data:', formData);

    // Example of sending the form data to a server using fetch
    fetch(`${config.apiBaseUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse response body as JSON
        } else {
          throw new Error(`Form submission failed: ${response.statusText}`);
        }
      })
      .then((data) => {
        setLoading(false);
        console.log('Response:', data);

        // Navigate or perform further actions based on the response
        navigate('/eligible', { state: { data } });
      })
      .catch((error) => {
        setLoading(false);
        // Error occurred while sending the form data, handle the error
        console.error('Error submitting form:', error);
      });
  };

  const headingStyle = {
    fontFamily: 'Poppins, sans-serif',
    letterSpacing: '0.03em',
    fontSize: '22px',
    margin: '8px 0',
    fontWeight: '600'
  };

  const subHeading = {
    fontSize: '16px',
    fontFamily: 'Poppins, sans-serif',
    margin: '5px 0',
    fontWeight: '500'
  };

 
  return (
    <>
      <Header />
      <Container style={{ paddingTop: '9vh', marginBottom: '5vh', background: '#fff', height:'100vh'}}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: '8px' }}>
            <h4 style={headingStyle}>Personal Data</h4>
          </div>
          <Info
            name={name}
            number={number}
            courseOffered={courseOffered}
            handleNameChange={handleNameChange}
            handleNumberChange={handleNumberChange}
            handleCourseOffered={handleCourseOfferedChange}
          />

          <div style={{ marginTop: '8px' }}>
            <h6 style={subHeading}>Please fill the form with the details from your slip</h6>
            <h4 style={headingStyle}>Core Subjects</h4>
          </div>

          <CoreSubjectField coreSubjects={coreSubjects} onGradeSelect={handleCoreGradeSelect} />

          <div style={{ marginTop: '8px' }}>
            <h6 style={subHeading}>Please fill the form with the details from your slip</h6>
            <h4 style={headingStyle}>Elective Subjects</h4>
          </div>

          <ElectiveSubjectField
            electives={electives}
            onElectiveChange={(elective) => handleElectiveChange('First Elective', elective)}
            onGradeSelect={(grade) => handleElectiveGradeChange('First Elective Grade', grade)}
          />
          <ElectiveSubjectField
            electives={electives}
            onElectiveChange={(elective) => handleElectiveChange('Second Elective', elective)}
            onGradeSelect={(grade) => handleElectiveGradeChange('Second Elective Grade', grade)}
          />
          <ElectiveSubjectField
            electives={electives}
            onElectiveChange={(elective) => handleElectiveChange('Third Elective', elective)}
            onGradeSelect={(grade) => handleElectiveGradeChange('Third Elective Grade', grade)}
          />
          <ElectiveSubjectField
            electives={electives}
            onElectiveChange={(elective) => handleElectiveChange('Fourth Elective', elective)}
            onGradeSelect={(grade) => handleElectiveGradeChange('Fourth Elective Grade', grade)}
          />
            
            <SubmitButton type="submit" text="Generate Possible Programs" />

        </form>
      </Container>

      {loading && <LoadingSpinner message="Loading..." />}
    </>
  );
};

export default Form;
