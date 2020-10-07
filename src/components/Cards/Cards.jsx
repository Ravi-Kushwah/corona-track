import React from 'react'
import {Card , CardComponent, Grid, Typography, CardContent} from '@material-ui/core'
import Countup from 'react-countup'
import styles from './Cards.module.css'
import cx from 'classnames'

const Cards = ({data: { confirmed , recovered , deaths, lastUpdate}}) => {
    console.log(confirmed);
    console.log(recovered);
    console.log(deaths);
    console.log(lastUpdate);

  if(!confirmed){
      return  " loading..." ;
  }
 console.log(lastUpdate)
    return (
        <div className={styles.container}>
          <Grid container spacing={3} justify={"center"}>
           <Grid style={{backgroundColor: 'rgba(208,208,241,0.5)'}} item component = {Card} xs={12} md={3} className={cx (styles.card, styles.infected )}>
           <CardContent>
               <Typography  gutterBottom>Infected </Typography>
               <Typography variant={"h5"}>
                   <Countup 
                      start={0}
                      end={confirmed.value}
                      duration={2.5}
                      separator=","
                   />
                </Typography>
               <Typography color={"textSecondary"}> {new Date(lastUpdate).toDateString()} </Typography>
               <Typography variant={"body2"}>Number Of active cases of COVID-19</Typography>
           </CardContent>
           </Grid>
           <Grid style={{backgroundColor: 'rgba(188,253,188,0.5)'}} item component = {Card} xs={12} md={3} className={cx (styles.card , styles.recovered )}>
           <CardContent>
               <Typography  gutterBottom>Recovered </Typography>
               <Typography variant={"h5"}>
               <Countup 
                      start={0}
                      end={recovered.value}
                      duration={2.5}
                      separator=","
                 />
               </Typography>
               <Typography color={"textSecondary"}> {new Date(lastUpdate).toDateString()}</Typography>
               <Typography variant={"body2"}>Number Of Recovered cases from COVID-19</Typography>
           </CardContent>
           </Grid>
           <Grid style={{backgroundColor: 'rgba(245,192,192,0.5)'}} item component = {Card} xs={12} md={3} className={cx (styles.card, styles.deaths )}>
            <CardContent>
               <Typography  gutterBottom>Deaths </Typography>
               <Typography variant={"h5"}> 
               <Countup 
                      start={0}
                      end={deaths.value}
                      duration={2.5}
                      separator=","
                   />
                </Typography>
               <Typography color={"textSecondary"}> {new Date(lastUpdate).toDateString()}</Typography>
               <Typography variant={"body2"}>Number Of Deaths caused by COVID-19</Typography>
           </CardContent>
           </Grid>
          </Grid>  
         </div>
    )
}

export default Cards
