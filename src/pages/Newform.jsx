import React, {useState, useEffect, useCallback} from 'react'
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Info from '../components/Info';
import CoreSubjectField from '../components/CoreSubjectField';
import ElectiveSubjectField from '../components/ElectiveSubjectField';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';
import SubmitButton from '../components/Button';
import ApiService from '../components/services';




const Newform = () => {

  // Basic Information State
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [courseOffered, setCourseOffered] = useState('');

  // Loading Screen and Error message State with Use Navigate from react router dom
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  // Core Subject State
  const [coreSubjects, setCoreSubjects] = useState({
    Mathematics: '',
    English: '',
    Science: '',
    'Social Studies': ''
  });

  // Elective Subject and Respective Elective Grades
  const [electiveSubjects, setElectiveSubjects] = useState([
    { elective: '', grade: '' },
    { elective: '', grade: '' },
    { elective: '', grade: '' },
    { elective: '', grade: '' }
  ]);

  // Let Handle Basic Information Input Change
  const handleNameChange = useCallback((event) => setName(event.target.value), []);
  const handleNumberChange = useCallback((event) => setNumber(event.target.value), []);
  const handleEmailChange = useCallback((event) => setEmail(event.target.value), []);
  const handleCourseOfferedChange = useCallback((event) => setCourseOffered(event.target.value), []);

  // // get an alert when user select -- as grades
  // const handleGradeSelect = (subject, grade) => {
  //   if (grade === '--') {
  //     alert('Please select a valid grade for ' + subject + '.');
  //     return;
  //   }
  // };



  // Let Handle core grade select change
  const handleCoreGradeSelect = (subject, grade) => {
    if (grade === '--') {
      alert('Please select a valid grade for ' + subject + '.');
      return;
    }
    setCoreSubjects((prevCoreSubjects) => ({
      ...prevCoreSubjects,
      [subject]: grade
    }));
  };

  // Let handle elective change
  const handleElectiveChange = (index, e) => {
    const newElectives = [...electiveSubjects];
    newElectives[index][e.target.name] = e.target.value;
    // Check if the newly selected grade is invalid
    if (newElectives[index].grade === '--') {
      alert('Please select a valid grade for elective ' + (index + 1) + '.');
      return;
    }
    setElectiveSubjects(newElectives);
  };

  // Let get course, grade and elective from ApiService
  const [courses, setCourses] = useState([]);
  const [grades, setGrades] = useState([]);
  const [electives, setElectives] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesData = await ApiService.fetchCourses();
        const gradesData = await ApiService.fetchGrades();
        const electivesData = await ApiService.fetchElectives();

        if (coursesData) setCourses(coursesData);
        if (gradesData) setGrades(gradesData);
        if (electivesData) setElectives(electivesData);

        // Print all data response from ApiService
        console.log('Courses:', coursesData);
        console.log('Grades:', gradesData);
        console.log('Electives:', electivesData);
      } catch (err) {
        console.error(err);
        setError('Error fetching data.');
      }
    };
    fetchData();
  }, []);


   // Submit form handler
   const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (!name || !number || !courseOffered) {
      alert('Please fill out all required fields.');
      setLoading(false);
      return;
    }

    // // check if grade = "--"
    // if (grades === '--') {
    //   alert('Please select a valid grade');
    //   setLoading(false);
    //   return;
    // }

    // Check for duplicate electives
    const electiveNames = electiveSubjects.map(subject => subject.elective);
    const uniqueElectives = new Set(electiveNames);

    if (uniqueElectives.size !== electiveNames.length) {
      alert('Each elective subject must be unique. Please remove duplicates.');
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

    try {
      const data = await ApiService.submitForm(formData);
      console.log('New Eligibility Response:', data);
      navigate('/eligible', { state: { data } }); 
    } catch (error) {
      setError('Error submitting form: ' + error.message);
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
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

        {/* Personal Data Field */}
        <div style={{ marginTop: '8px', marginBottom: '20px' }}>
            <h4 style={headingStyle}>Personal Data</h4>
            <h6 style={subHeading}>Please provide your information as this will help us to get in touch with you.</h6>
        </div>

        <Info name={name} number={number} email={email} courseOffered={courseOffered} courses={courses} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleEmailChange={handleEmailChange} handleCourseOffered={handleCourseOfferedChange} />

        {/* Core Subject Field */}
        <div style={{ marginTop: '8px', marginBottom: '20px' }}>
          <h4 style={headingStyle}>Core Subjects</h4>
          <h6 style={subHeading}>Please fill the form with the details from your slip</h6>
        </div>

        <CoreSubjectField coreSubjects={coreSubjects} grades={grades} onGradeSelect={handleCoreGradeSelect} />

        {/* Elective Subject Field */}
        <div style={{ marginTop: '8px', marginBottom: '20px' }}>
            <h4 style={headingStyle}>Elective Subjects</h4>
            <h6 style={subHeading}>Please fill the form with the details from your slip</h6>
        </div>

        <ElectiveSubjectField electiveSubjects={electiveSubjects} electives={electives} grades={grades} handleElectiveChange={handleElectiveChange}/>

        <SubmitButton type="submit" text="Generate Possible Programs" />

      </form>
      </Container>
      {loading && <LoadingSpinner message="Loading..." />}
    </>
  )
}

export default Newform