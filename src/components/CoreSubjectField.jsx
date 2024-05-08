import React, { useState, useEffect } from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';
import FetchGrades from './FetchGrades'; // Import the FetchGrades component

const CoreSubjectField = () => {
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
                        value={selectedSubject}
                        fullWidth
                        margin="normal"
                        onChange={handleSubjectChange}
                    >
                        {coreSubjects.map(coreSubject => (
                            <MenuItem key={coreSubject} value={coreSubject}>{coreSubject}</MenuItem>
                        ))}
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