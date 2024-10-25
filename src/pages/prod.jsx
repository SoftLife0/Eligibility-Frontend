import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Info from '../components/Info';
import CoreSubjectField from '../components/CoreSubjectField';
import ElectiveSubjectField from '../components/ElectiveSubjectField';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';
import SubmitButton from '../components/Button';
import ApiService from '../components/services';




const Form = () => {

  const navigate = useNavigate();

//   State for Basic Information
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [courseOffered, setCourseOffered] = useState('');

  // Loading screen state
  const [loading, setLoading] = useState(false);

//   State for Core Subject Information
  
  const [coreSubjects, setCoreSubjects] = useState({
    Mathematics: '',
    English: '',
    Science: '',
    'Social Studies': ''
  });

//   State for Elective Subject Information

  const [electiveSubjects, setElectiveSubjects] = useState([
    { elective: '', grade: '' },
    { elective: '', grade: '' },
    { elective: '', grade: '' },
    { elective: '', grade: '' }
  ]);
 

  const [courses, setCourses] = useState([]);
  const [grades, setGrades] = useState([]);
  const [electives, setElectives] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesData = await ApiService.fetchCourses();
        const gradesData = await ApiService.fetchGrades();
        const electivesData = await ApiService.fetchElectives();

        if (coursesData) setCourses(coursesData);
        if (gradesData) setGrades(gradesData);
        if (electivesData) setElectives(electivesData);
      } catch (err) {
        console.error(err);
        setError('Error fetching data.');
      }
    };
    fetchData();
  }, []);

  
  // Basic form input handlers
  const handleNameChange = (event) => setName(event.target.value);
  const handleNumberChange = (event) => setNumber(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleCourseOfferedChange = (event) => setCourseOffered(event.target.value);


  // Handlers for core and elective subject changes
   const handleCoreSubjectChange = (e) => {
    setCoreSubjects({ ...coreSubjects, [e.target.name]: e.target.value });
  };

  const handleElectiveChange = (index, e) => {
    const newElectives = [...electiveSubjects];
    newElectives[index][e.target.name] = e.target.value;
    setElectiveSubjects(newElectives);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
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
      email,
      courseOffered,
      Course: courseOffered,
      mathsScore: coreSubjects['Mathematics'],
      englishScore: coreSubjects['English'],
      scienceScore: coreSubjects['Science'],
      socialScore: coreSubjects['Social Studies'],
      el1: electiveSubjects[0].elective,
      el1grade: electiveSubjects[0].grade,
      el2: electiveSubjects[1].elective,
      el2grade: electiveSubjects[1].grade,
      el3: electiveSubjects[2].elective,
      el3grade: electiveSubjects[2].grade,
      el4: electiveSubjects[3].elective,
      el4grade: electiveSubjects[3].grade,
    };

    
    // Example of logging the form data
    console.log('New Eligibility Request data:', formData);

    // Call the ApiService's submitForm function

    try {
        const response = await ApiService.submitForm(formData);

        // Check if responseData is not null (indicating success)
        if (response.status === 200) {
            console.log('Eligibbble courses for anew request:', response);
            // Navigate to the success page or perform further actions
            navigate('/eligible', { state: { data: response.data } });
        } else {
            setError('Form submission failed.');
        }
        } catch (error) {
            setLoading(false);
            console.error('Error submitting form:', error);
            setError('Error submitting form.');
        } 
  };


  const headingStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    margin: '0',
    fontWeight: '600'
  };

  const subHeading = {
    fontSize: '14px',
    fontFamily: 'Poppins, sans-serif',
    margin: '0',
    fontWeight: '500',
    opacity: '0.5'
  };

 
  return (
    <>
      <Header />
      <Container style={{ paddingTop: '9vh', marginBottom: '5vh', background: '#fff'}}>
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}


          <div style={{ marginTop: '8px', marginBottom: '20px' }}>
            <h4 style={headingStyle}>Personal Data</h4>
            <h6 style={subHeading}>Please provide your information as this will help us to get in touch with you.</h6>
          </div>
          <Info
            name={name}
            number={number}
            email={email}
            courseOffered={courseOffered}
            courses={courses}
            handleNameChange={handleNameChange}
            handleNumberChange={handleNumberChange}
            handleEmailChange={handleEmailChange}
            handleCourseOffered={handleCourseOfferedChange}
          />

          <div style={{ marginTop: '8px', marginBottom: '20px' }}>
            <h4 style={headingStyle}>Core Subjects</h4>
            <h6 style={subHeading}>Please fill the form with the details from your slip</h6>
          </div>

        
          <CoreSubjectField coreSubjects={coreSubjects} grades={grades} handleCoreSubjectChange={handleCoreSubjectChange}/>

          <div style={{ marginTop: '8px' }}>
            <h4 style={headingStyle}>Elective Subjects</h4>
            <h6 style={subHeading}>Please fill the form with the details from your slip</h6>
          </div>

          <ElectiveSubjectField
            electives={electives}
            grades={grades}
            electiveSubjects={electiveSubjects} 
            handleElectiveChange={handleElectiveChange}          
            />
                      
            <SubmitButton type="submit" text="Generate Possible Programs" />
        </form>
      </Container>

      {loading && <LoadingSpinner message="Loading..." />}
    </>
  );
};

export default Form;
