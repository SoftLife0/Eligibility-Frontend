import React, { useState, useEffect } from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';
import FetchGrades from './FetchGrades'; // Import the FetchGrades component

const CoreSubjectField = ({ subject, onGradeChange }) => {
    const [coreSubjects, setCoreSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedGrade, setSelectedGrade] = useState('');
    const [subjectGrades, setSubjectGrades] = useState([]);

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const response = await fetch('https://forms.central.edu.gh/temp');
                if (!response.ok) {
                    throw new Error('Failed to fetch subjects');
                }
                const data = await response.json();
                setCoreSubjects(data.coreSubjects);
            } catch (error) {
                console.error('Error fetching subjects:', error);
            }
        };

        fetchSubjects();
    }, []);

    useEffect(() => {
        // Fetch grades for the selected subject
        const fetchGrades = async () => {
            try {
                const response = await fetch(`https://forms.central.edu.gh/grades/${selectedSubject}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch grades');
                }
                const data = await response.json();
                setSubjectGrades(data.grades);
            } catch (error) {
                console.error('Error fetching grades:', error);
            }
        };

        if (selectedSubject) {
            fetchGrades();
        }
    }, [selectedSubject]);

    const handleSubjectChange = (event) => {
        setSelectedSubject(event.target.value);
    };

    const handleGradeSelect = (gradeId) => {
        setSelectedGrade(gradeId);
        // onSelectGrade(gradeId); // This line seems redundant, as you're already setting the selected grade locally
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className="form-group">
                <TextField
                        select
                        label="Subject"
                        value={subject}
                        fullWidth
                        margin="normal"
                        disabled // Assuming subject is not editable
                    >
                        <MenuItem value={subject}>{subject}</MenuItem>
                    </TextField>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className="form-group">
                    {/* Pass the grades fetched for selected subject to FetchGrades */}
                    <FetchGrades onSelectGrade={handleGradeSelect} grades={subjectGrades} />
                </div>
            </Grid>
        </Grid>
    );
};


export default CoreSubjectField;