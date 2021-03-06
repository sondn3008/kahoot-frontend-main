import React from "react";
import Grid from '@mui/material/Grid';
import styles from './style.module.css'
import { Link } from "react-router-dom";

const ChooseAccount = () => {
 return (
     <>
         <div className={'Rectangle-14'}>
             <div className={'Rectangle-13'}>
                 <div className={'image-5'}>
                     <img src={require('./image/kahoot1.png')} />
                 </div>
             </div>
             <Grid container spacing={3}>
                 <Grid item xs={12}>
                     <h1 className={'Choose-your-account-type'}>Choose your account type</h1>
                 </Grid>
                 <Grid item xs={12}>
                     <Grid container spacing={3}>
                         <Grid item xs={6}>
                             <Link className={styles.card_teacher} to="/login">
                                 <div className={styles.teacher_container}>
                                     <div className={styles.icon_teaceher}>
                                         <img src={require('./image/teacher.png')} />
                                     </div>
                                     <div className={'Rectangle-5'}>
                                         <h1 className={"Teacher"} >Teacher</h1>
                                     </div>
                                 </div>
                             </Link>
                         </Grid>
                         <Grid item xs={6}>
                             <Link className={styles.card_student} to="/student">
                                 <div className={styles.student_container}>
                                     <div className={styles.icon_student}>
                                         <img src={require('./image/student.png')} />
                                     </div>
                                     <div className={'Rectangle-5'}>
                                         <h1 className={"Teacher"} >Student</h1>
                                     </div>
                                 </div>
                             </Link>
                         </Grid>
                     </Grid>
                 </Grid>
             </Grid>
         </div>
     </>
 );
}
export default ChooseAccount