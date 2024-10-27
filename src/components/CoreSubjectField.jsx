import React from 'react';
import { Grid, TextField } from '@mui/material';
import FetchGrades from './FetchGrades';

const CoreSubjectField = ({ coreSubjects, onGradeSelect, grades }) => {

    const grid = {
        paddingTop: '0'
    }

    return (
        <Grid container spacing={2}>
            {Object.entries(coreSubjects).map(([subject, value], index) => (
                <React.Fragment key={index}>
                    <Grid item xs={8} style={grid}>
                        <div className="form-group">
                            <TextField
                                value={subject}
                                fullWidth
                                margin="normal"
                                disabled
                                style={{ background: '#e9ecef' }}
                                size="small"
                            />
                        </div>
                    </Grid>
                    <Grid item xs={4} style={grid}>
                        <div className="form-group">
                            <FetchGrades
                                onSelectGrade={selectedGrade => onGradeSelect(subject, selectedGrade)}
                                grades={grades}
                            />
                        </div>
                    </Grid>
                </React.Fragment>
            ))}
        </Grid>
    );
};

export default CoreSubjectField;
