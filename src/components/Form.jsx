import React, { useState} from 'react';
import Container from '@mui/material/Container'; 
// import { Grid, TextField, MenuItem} from '@mui/material';
import Info from './Info';
import CoreSubjectField from './CoreSubjectField';
import ElectiveSubjectField from './ElectiveSubjectField';



const Form = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
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
    

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleGradeChange = (index, event) => {
        const newCoreSubjects = [...coreSubjects];
        newCoreSubjects[index].grade = event.target.value;
        setCoreSubjects(newCoreSubjects);
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

    const electiveOptions = ['Biology', 'Chemistry', 'History', 'Physics', 'French'];

    const gradeOptions = [
        'A1', 'B2', 'B3', 'C4', 'C5', 'C6', 'D7', 'E8', 'F9', 'None'
    ];

  return (
    <Container>
        <br />
        <small className="text-muted" style={{fontSize:'18px'}}> Please fill the form with the details from your slip</small>

        {/* Render the Info component passing state variables and handlers */}
        <Info 
            name={name} 
            number={number} 
            selectedOption={selectedOption} 
            handleNameChange={handleNameChange} 
            handleNumberChange={handleNumberChange} 
            handleOptionChange={handleOptionChange} 
        />
        {/* Other form elements can go here */}

        <h4 style={{fontSize:'1.5rem', marginBottom:'.5rem', fontWeight:'500'}}>Core Subjects</h4>

        {coreSubjects.map((subject, index) => (
        <CoreSubjectField
          key={index}
          subject={subject.subject}
          grade={subject.grade}
          options={gradeOptions}
          onGradeChange={(event) => handleGradeChange(index, event)}
        />
        ))}

        <h4 style={{fontSize:'1.5rem', marginBottom:'.5rem', fontWeight:'500'}}>Elective Subjects</h4>
        {electiveSubjects.map((subject, index) => (
            <ElectiveSubjectField
            key={index}
            elective={subject.elective}
            grade={subject.grade}
            gradeOptions={gradeOptions}
            electiveOptions={electiveOptions} // Pass the options prop here
            onElectiveChange={(event) => handleElectiveChange(index, event)}
            onGradeChange={(event) => handleElectiveGradeChange(index, event)}
        />
        ))}

    </Container>
  )
}

export default Form;