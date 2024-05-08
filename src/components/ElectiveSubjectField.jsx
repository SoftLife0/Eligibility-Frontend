import React, { useState, useEffect } from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';
import FetchGrades from './FetchGrades';

const ElectiveSubjectField = () => {
    const [electiveSubjects, setElectiveSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedGrade, setSelectedGrade] = useState('');
    const [subjectGrades, setSubjectGrades] = useState([]);


    useEffect(() => {
        const fetchElectiveOptions = async () => {
            try {
                const response = await fetch('https://forms.central.edu.gh/temp');
                if (!response.ok) {
                    throw new Error('Failed to fetch elective options');
                }
                const data = await response.json();
                setElectiveSubjects(data.electiveSubjects);
            } catch (error) {
                console.error('Error fetching elective options:', error);
            }
        };

        

        fetchElectiveOptions();
    }, []);

    const handleElectiveChange = (event) => {
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
                        onChange={handleElectiveChange}
                    >
                        {electiveSubjects.map(electiveSubject => (
                            <MenuItem key={electiveSubject} value={electiveSubject}>{electiveSubject}</MenuItem>
                        ))}
                    </TextField>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className="form-group">
                    <FetchGrades onSelectGrade={handleGradeSelect} grades={subjectGrades} />
                </div>
            </Grid>
        </Grid>
    );
};

export default ElectiveSubjectField;
