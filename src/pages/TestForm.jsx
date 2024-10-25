import React, { useEffect, useState } from 'react';
import ApiService from '../components/services';
import BasicInfo from '../components/BasicInfo';
import CoreSubjects from '../components/AllCore';



const Form = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [courseOffered, setCourseOffered] = useState('');

    const [coreSubjects, setCoreSubjects] = useState({ 
      Mathematics: '', 
      English: '', 
      Science: '', 
      'Social Studies': '' 
    });

    const [electiveSubjects, setElectiveSubjects] = useState([
        { elective: '', grade: '' },
        { elective: '', grade: '' },
        { elective: '', grade: '' },
        { elective: '', grade: '' }
    ]);

    const [courses, setCourses] = useState([])
    const [grades, setGrades] = useState([]);
    const [electives, setElectives] = useState([]);
    const [error, setError] = useState(null);
  

    useEffect(() => {
        const fetchData = async () => {
        try {
            const coursesData = await ApiService.fetchCourses();
            console.log('Courses:', coursesData);
    
            const gradesData = await ApiService.fetchGrades();
            console.log('Grades:', gradesData); 
    
            const electivesData = await ApiService.fetchElectives();
            console.log('Electives:', electivesData);
    
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
  

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleNumberChange = (event) => {
      setNumber(event.target.value);
    };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handleCourseOffered = (event) => {
      setCourseOffered(event.target.value);
    };

    const handleCoreSubjectChange = (e) => {
      setCoreSubjects({ ...coreSubjects, [e.target.name]: e.target.value });
    };


  return (
    <form>
      {error && <div className="error">{error}</div>}

      {/* Basic Info Section */}
      <h2>Basic Info</h2>
        <BasicInfo 
          name={name} 
          number={number} 
          email={email} 
          courseOffered={courseOffered} 
          courses={courses}
          handleNameChange={handleNameChange} 
          handleNumberChange={handleNumberChange} 
          handleEmailChange={handleEmailChange} 
          handleCourseOffered={handleCourseOffered}
        />

      

      {/* Core Subjects Section */}
      <CoreSubjects coreSubjects={coreSubjects} grades={grades} handleCoreSubjectChange={handleCoreSubjectChange} />

      {/* <h2>Core Subjects</h2>
      <label>Maths Grade:</label>
      <select required>
        {grades.map((grade, index) => (
          <option key={index} value={grade}>
            {grade}
          </option>
        ))}
      </select> */}

      {/* Elective Subjects Section */}
      <h2>Elective Subjects</h2>
      <label>Select Elective:</label>
      <select required>
        {electives.map((elective, index) => (
          <option key={index} value={elective}>
            {elective}
          </option>
        ))}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
