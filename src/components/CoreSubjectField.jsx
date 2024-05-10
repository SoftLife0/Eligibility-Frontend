import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import FetchGrades from './FetchGrades'; // Import the FetchGrades component

const CoreSubjectField = ({ coreSubjects, onGradeSelect }) => {
    const [grades, setGrades] = useState({});

    const handleGradeSelect = (subject, grade) => {
        setGrades(prevGrades => ({
            ...prevGrades,
            [subject]: grade
        }));

        // Pass the selected grade back to the parent component
        onGradeSelect(subject, grade);
    };

    return (
        <Grid container spacing={2}>
            {Object.entries(coreSubjects).map(([subject, value], index) => (
                <React.Fragment key={index}>
                    <Grid item xs={8}>
                        <div className="form-group">
                            <TextField
                                // label={subject}
                                value={subject}
                                fullWidth
                                margin="normal"
                                disabled
                                style={{background:'#e9ecef'}}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="form-group">
                            <FetchGrades
                                onSelectGrade={grade => handleGradeSelect(subject, grade)}
                                grades={grades[subject]}
                            />
                        </div>
                    </Grid>
                </React.Fragment>
            ))}
        </Grid>
    );
};

export default CoreSubjectField;
