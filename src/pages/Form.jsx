import React, { useState } from 'react';
import Container from '@mui/material/Container'; 
import { useNavigate } from 'react-router-dom';
import Info from '../components/Info'; // Updated Info component import
import CoreSubjectField from '../components/CoreSubjectField';
import ElectiveSubjectField from '../components/ElectiveSubjectField';
import SubmitButton from '../components/Button';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';

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

    const [electiveSubjects, setElectiveSubjects] = useState([]);
    const [electiveGrades, setElectiveGrades] = useState({});

    const [responseData, setResponseData] = useState([])

    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    const handleCourseOffered = (event) => {
        setCourseOffered(event.target.value);
    };

    const handleGradeSelect = (subject, grade) => {
        setCoreSubjects(prevCoreSubjects => ({
            ...prevCoreSubjects,
            [subject]: grade
        }));
    };

    const handleSubmit = () => {
        setLoading(true);
        // Prepare the data to be submitted
        const formData = {
            name: name,
            number: number,
            courseOffered: courseOffered,
            Course: courseOffered,
            mathsScore: coreSubjects['Mathematics'],
            englishScore: coreSubjects['English'],
            scienceScore: coreSubjects['Science'],
            socialScore: coreSubjects['Social Studies'],
            el1: electiveGrades['Elective 1'],
            el1grade: electiveGrades['Elective 1 Grade'],
            el2: electiveGrades['Elective 2'],
            el2grade: electiveGrades['Elective 2 Grade'],
            el3: electiveGrades['Elective 3'],
            el3grade: electiveGrades['Elective 3 Grade'],
            el4: electiveGrades['Elective 4'],
            el4grade: electiveGrades['Elective 4 Grade']
        };
      
        // Example of logging the form data
        console.log('Form data:', formData);
      
        // Example of sending the form data to a server using fetch
        fetch('https://api_eligibility.central.edu.gh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)

        })
        .then(response => {
            if (response.ok) {
                return response.json(); // Parse response body as JSON
            } else {
                throw new Error('Form submission failed:', response.statusText);
            }
        })
        .then(data => {
            setLoading(false);
            console.log("Response:", data);
            setResponseData(data); // Set the response data
            // Navigate or perform further actions based on the response
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

                {/* Render the updated Info component */}
                <Info 
                    name={name} 
                    number={number} 
                    courseOffered={courseOffered}
                    handleNameChange={handleNameChange} 
                    handleNumberChange={handleNumberChange} 
                    handleCourseOffered={handleCourseOffered} 
                />

                
                <div style={{marginTop:'8px'}}>
                    <h4 style={{fontSize:'1.5rem', margin:'8px 0', fontWeight:'500'}}>Core Subjects</h4>
                </div>

                <CoreSubjectField coreSubjects={coreSubjects} onGradeSelect={handleGradeSelect} />


                <div style={{marginTop:'8px'}}>
                    <h6 style={{fontSize:'1rem', margin:'5px 0', fontWeight:'500'}}>Please fill the form with the details from your slip</h6>
                    <h4 style={{fontSize:'1.5rem', margin:'8px 0', fontWeight:'500'}}>Elective Subjects</h4>
                </div>

                {electiveSubjects.map((subject, index) => (
                    <ElectiveSubjectField
                        key={index}
                        subject={subject.elective} // Update to 'elective' instead of 'subject'
                        grade={subject.grade}
                    />
                ))}

                {/* Render the SubmitButton component */}
                <SubmitButton onClick={handleSubmit} text="Submit" />
            </Container>
            
            {/* Loading Screen */}
            {loading && <LoadingSpinner message="Loading..." />}
        </>
    );
};

export default Form;
