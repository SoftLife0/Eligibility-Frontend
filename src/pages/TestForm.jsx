// import React, { useEffect, useState } from 'react';
// import ApiService from '../components/services';
// import BasicInfo from '../components/BasicInfo';
// import CoreSubjects from '../components/AllCore';
// import ElectiveSubjects from '../components/AllElective';
// import { useNavigate } from 'react-router-dom';

// const Form = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [courseOffered, setCourseOffered] = useState('');

//   const [coreSubjects, setCoreSubjects] = useState({ 
//     Mathematics: '', 
//     English: '', 
//     Science: '', 
//     'Social Studies': '' 
//   });

//   const [electiveSubjects, setElectiveSubjects] = useState([
//     { elective: '', grade: '' },
//     { elective: '', grade: '' },
//     { elective: '', grade: '' },
//     { elective: '', grade: '' }
//   ]);

//   const [courses, setCourses] = useState([]);
//   const [grades, setGrades] = useState([]);
//   const [electives, setElectives] = useState([]);
//   const [error, setError] = useState(null);

//   // Fetch course, grade, and elective data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const coursesData = await ApiService.fetchCourses();
//         const gradesData = await ApiService.fetchGrades();
//         const electivesData = await ApiService.fetchElectives();

//         if (coursesData) setCourses(coursesData);
//         if (gradesData) setGrades(gradesData);
//         if (electivesData) setElectives(electivesData);
//       } catch (err) {
//         console.error(err);
//         setError('Error fetching data.');
//       }
//     };
//     fetchData();
//   }, []);

//   // Basic form input handlers
//   const handleNameChange = (event) => setName(event.target.value);
//   const handleNumberChange = (event) => setNumber(event.target.value);
//   const handleEmailChange = (event) => setEmail(event.target.value);
//   const handleCourseOffered = (event) => setCourseOffered(event.target.value);

//   // Handlers for core and elective subject changes
//   const handleCoreSubjectChange = (e) => {
//     setCoreSubjects({ ...coreSubjects, [e.target.name]: e.target.value });
//   };

//   const handleElectiveChange = (index, e) => {
//     const newElectives = [...electiveSubjects];
//     newElectives[index][e.target.name] = e.target.value;
//     setElectiveSubjects(newElectives);
//   };

//   // Validate the form data before submitting
//   const validateForm = (formData) => {
//     const { name, number, email, courseOffered, coreSubjects, electiveSubjects } = formData;
    
//     if (!name || !number || !email || !courseOffered) {
//       setError('Please fill out all required fields.');
//       return false;
//     }
  
//     // Check if coreSubjects exists and has values
//     if (!coreSubjects || Object.values(coreSubjects).some(subject => subject === '')) {
//       setError('Please select grades for all core subjects.');
//       return false;
//     }
  
//     // Check elective subjects
//     const electivesSelected = electiveSubjects.map(e => e.elective);
//     if (electiveSubjects.some(elective => !elective.elective || !elective.grade)) {
//       setError('Please select all electives and their grades.');
//       return false;
//     } else if (new Set(electivesSelected).size !== electivesSelected.length) {
//       setError('Duplicate electives are not allowed.');
//       return false;
//     }
  
//     setError(''); // Clear error if validation passes
//     return true;
//   };

//   // Submit form handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = {
//       name,
//       number,
//       email,
//       courseOffered,
//       mathsScore: coreSubjects['Mathematics'],
//       englishScore: coreSubjects['English'],
//       scienceScore: coreSubjects['Science'],
//       socialScore: coreSubjects['Social Studies'],
//       el1: electiveSubjects[0].elective,
//       el1grade: electiveSubjects[0].grade,
//       el2: electiveSubjects[1].elective,
//       el2grade: electiveSubjects[1].grade,
//       el3: electiveSubjects[2].elective,
//       el3grade: electiveSubjects[2].grade,
//       el4: electiveSubjects[3].elective,
//       el4grade: electiveSubjects[3].grade,
//     };

//     if (!validateForm(formData)) return;

//     try {
//       const response = await ApiService.submitForm(formData);
//       if (response.status === 200) {
//         navigate('/eligible', { state: { data: response.data } });
//       } else {
//         setError('Form submission failed.');
//       }
//     } catch (err) {
//       setError('Error submitting form.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {error && <div className="error">{error}</div>}

//       <h2>Basic Info</h2>
//       <BasicInfo 
//         name={name} 
//         number={number} 
//         email={email} 
//         courseOffered={courseOffered} 
//         courses={courses}
//         handleNameChange={handleNameChange} 
//         handleNumberChange={handleNumberChange} 
//         handleEmailChange={handleEmailChange} 
//         handleCourseOffered={handleCourseOffered}
//       />

//       <CoreSubjects coreSubjects={coreSubjects} grades={grades} handleCoreSubjectChange={handleCoreSubjectChange} />

//       <ElectiveSubjects 
//         electiveSubjects={electiveSubjects} 
//         electives={electives} 
//         grades={grades} 
//         handleElectiveChange={handleElectiveChange}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form;




