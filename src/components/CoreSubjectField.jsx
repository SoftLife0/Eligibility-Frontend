import React from 'react';
import { Grid, TextField, MenuItem, Select } from '@mui/material';

const CoreSubjectField = ({ coreSubjects, grades, handleCoreSubjectChange }) => {
    const coreSubjectNames = ['Mathematics', 'English', 'Science', 'Social Studies'];

    return (
        <div>
            <h2>Core Subjects</h2>
            <Grid container spacing={2}>
                {coreSubjectNames.map((subject) => (
                    <React.Fragment key={subject}>
                        {/* Subject Name Grid (Width 8) */}
                        <Grid item xs={8}>
                            <TextField
                                label={subject}
                                name={subject}
                                value={coreSubjects[subject]}
                                fullWidth
                                margin="normal"
                                disabled
                                style={{ background: '#e9ecef' }}
                                size="small"
                            />
                        </Grid>
                        {/* Grade Selection Grid (Width 4) */}
                        <Grid item xs={4}>
                            <Select
                                name={subject}
                                value={coreSubjects[subject] || ''} // Use empty string if value is undefined
                                onChange={handleCoreSubjectChange}
                                fullWidth
                                displayEmpty
                                size="small"
                            >
                                <MenuItem value="" disabled>
                                    Select Grade
                                </MenuItem>
                                {grades.map((grade) => (
                                    <MenuItem key={grade} value={grade}>
                                        {grade}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </div>
    );
};

export default CoreSubjectField;
