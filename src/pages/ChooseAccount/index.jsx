import React from "react";
import Grid from '@mui/material/Grid';
import styles from './style.module.css'

const ChooseAccount = () => {
 return(
     <>
          <Grid container spacing={3}>
            <Grid item xs={12}>
                <h1 className={styles.title}>Choose your account type</h1>
            </Grid>
            <Grid item xs={12}>
               <Grid container spacing={3}>
                   <Grid item xs={6}>
                   <a className={styles.card_teacher} href="/">
                        <div className={styles.teacher_container}>
                            <div className={styles.icon_teaceher}>
                                <img src={ require('./image/teacher.png') } />
                            </div>
                            <div className={styles.title_teacher}>
                            <h1>Teacher</h1>
                        </div>
                        </div>
                       
                    </a>
                   </Grid>
                   <Grid item xs={6}>
                   <a className={styles.card_student} href="/">
                        <div className={styles.student_container}>
                            <div className={styles.icon_student}>
                                <img src={ require('./image/student.png') } />
                            </div>
                            <div className={styles.title_student}>
                            <h1>Student</h1>
                        </div>
                        </div>
                       
                    </a>
                   </Grid>
               </Grid>
            </Grid>
        </Grid>

     </>
 )
}
export default ChooseAccount