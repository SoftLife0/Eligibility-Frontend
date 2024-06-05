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

    const grid = {
        paddingTop: '0'
    }

    return (
        <Grid container spacing={2}>
            {Object.entries(coreSubjects).map(([subject, value], index) => (
                <React.Fragment key={index}>
                    <Grid item xs={8} style={grid}>
                        {/* <div className="form-control">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input 
                            className="answerSelectCard" 
                            id="subject" 
                            name="subject" 
                            placeholder="subject" 
                            type="text"
                            disabled
                            fullWidth
                            value={subject}
                            />
                        </div> */}
                        <div className="form-group">
                            <TextField
                                // label={subject}
                                value={subject}
                                fullWidth
                                margin="normal"
                                disabled
                                style={{background:'#e9ecef'}}
                                size="small"

                            />
                        </div>
                    </Grid>
                    <Grid item xs={4} style={grid}>
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
