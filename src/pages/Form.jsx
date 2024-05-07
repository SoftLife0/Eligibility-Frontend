import React, { useState } from 'react';
import Container from '@mui/material/Container'; 
import { useNavigate } from 'react-router-dom';
import Info from '../components/Info';
import CoreSubjectField from '../components/CoreSubjectField';
import ElectiveSubjectField from '../components/ElectiveSubjectField';
import SubmitButton from '../components/Button';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';

const Form = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [coreSubjects, setCoreSubjects] = useState([
        { subject: 'Mathematics', grade: 'None' },
        { subject: 'English', grade: 'None' },
        { subject: 'Science', grade: 'None' },
        { subject: 'Social Studies', grade: 'None' },
    ]);
    const [electiveSubjects, setElectiveSubjects] = useState([
        { elective: '', grade: 'None' },
        { elective: '', grade: 'None' },
        { elective: '', grade: 'None' },
        { elective: '', grade: 'None' },
    ]);

    const [selectedCourse, setSelectedCourse] = useState('');

    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    const handleCourseChange = (courseId) => {
        setSelectedCourse(courseId);
    };

    const handleGradeChange = (index, event) => {
      const newElectiveSubjects = [...electiveSubjects];
      newElectiveSubjects[index].grade = event.target.value;
      setElectiveSubjects(newElectiveSubjects);
  };

  const handleElectiveChange = (index, event) => {
      const newElectiveSubjects = [...electiveSubjects];
      newElectiveSubjects[index].elective = event.target.value;
      setElectiveSubjects(newElectiveSubjects);
  };

  const handleElectiveGradeChange = (index, event) => {
      const newElectiveSubjects = [...electiveSubjects];
      newElectiveSubjects[index].grade = event.target.value;
      setElectiveSubjects(newElectiveSubjects);
  };

    const handleSubmit = () => {
        setLoading(true);
        // Prepare the data to be submitted
        const formData = {
            name: name,
            number: number,
            selectedCourse: selectedCourse,
            coreSubjects: coreSubjects,
            electiveSubjects: electiveSubjects
        };
      
        // Example of logging the form data
        console.log('Form data:', formData);
      
        // Example of sending the form data to a server using fetch
        fetch('http://172.188.12.230:5000/temp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                setLoading(false);
                // Form submission successful, navigate to /eligible
                navigate.push('/eligible');
            } else {
                // Form submission failed, handle the error
                console.error('Form submission failed:', response.statusText);
                setLoading(false); // Reset loading state
            }
        })
        .catch(error => {
            setLoading(false);
            // Error occurred while sending the form data, handle the error
            console.error('Error submitting form:', error);
        });
    };

    return (
        <>
            <Header />
            <Container style={{marginTop:'9vh', marginBottom:'5vh', background:'#fff'}} >
            
                <h6 className="text-muted" style={{fontSize:'18px', margin:'5px 0', fontWeight:'500'}}><b>Note:</b> Please fill the form with the details from your slip</h6>

                {/* Render the Info component passing state variables and handlers */}
                <Info 
                    name={name} 
                    number={number} 
                    selectedCourse={selectedCourse}
                    handleNameChange={handleNameChange} 
                    handleNumberChange={handleNumberChange} 
                    handleCourseChange={handleCourseChange} 
                />
                
                <div style={{marginTop:'8px'}}>
                    <h4 style={{fontSize:'1.5rem', margin:'8px 0', fontWeight:'500'}}>Core Subjects</h4>
                </div>

                {coreSubjects.map((subject, index) => (
                    <CoreSubjectField
                        key={index}
                        subject={subject.subject}
                        grade={subject.grade}
                        onGradeChange={(event) => handleGradeChange(index, event)}
                    />
                ))}

                {/* <div style={{marginTop:'8px'}}>
                    <h6 style={{fontSize:'1rem', margin:'5px 0', fontWeight:'500'}}>Please fill the form with the details from your slip</h6>
                    <h4 style={{fontSize:'1.5rem', margin:'8px 0', fontWeight:'500'}}>Elective Subjects</h4>
                </div>

                {electiveSubjects.map((subject, index) => (
                    <ElectiveSubjectField
                        key={index}
                        index={index}
                        onElectiveChange={handleElectiveChange}
                        onGradeChange={handleElectiveGradeChange}
                    />
                ))} */}

                {/* Render the SubmitButton component */}
                <SubmitButton onClick={handleSubmit} text="Submit" />
            </Container>
            
            {/* Loading Screen */}
            {loading && <LoadingSpinner message="Loading..." />}
        </>
    );
};

export default Form;
