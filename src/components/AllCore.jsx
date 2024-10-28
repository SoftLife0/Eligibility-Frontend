
// import React from 'react';
// import { Grid, TextField, MenuItem, Typography } from '@mui/material';

// const CoreSubjects = ({ coreSubjects, grades, handleCoreSubjectChange }) => {
//   const coreSubjectNames = ['Mathematics', 'English', 'Science', 'Social Studies'];

//   return (
//     <div>
//       <Typography variant="h6" gutterBottom>
//         Core Subjects
//       </Typography>
//       <Grid container spacing={2}>
//         {coreSubjectNames.map((subject) => (
//           <Grid container item spacing={2} key={subject} alignItems="center">
//             {/* Subject dropdown with 8 columns */}
//             <Grid item xs={8}>
//               <TextField
//                 // select
//                 label={subject}
//                 name={subject}
//                 value={coreSubjects[subject] || ''}
//                 onChange={(e) => handleCoreSubjectChange(e, subject)}
//                 fullWidth
//                 required
//                 disabled
//               >
//               </TextField>
//             </Grid>

//             {/* Grade dropdown with 4 columns */}
//             <Grid item xs={4}>
//               <TextField
//                 select
//                 label="Grade"
//                 name={`${subject}Grade`}
//                 value={coreSubjects[`${subject}Grade`] || ''}
//                 onChange={(e) => handleCoreSubjectChange(e, `${subject}Grade`)}
//                 fullWidth
//                 required
//               >
//                 <MenuItem value="">
//                   <em>Select grade</em>
//                 </MenuItem>
//                 {grades.map((grade) => (
//                   <MenuItem key={grade} value={grade}>
//                     {grade}
//                   </MenuItem>
//                 ))}
//               </TextField>
//             </Grid>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default CoreSubjects;
