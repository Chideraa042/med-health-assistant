import React from 'react'; 
import './videoChat.css';

import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import { VideoPlayer } from '../VideoPlayer';
import { Options } from '../options/Options';
import { Notifications } from '../notifications/Notifications';


const useStyles = makeStyles((theme) => ({
    AppBar: {
        borderRadius: 10,
        margin: '100px',
        marginBottom: '15px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: 'var(--color-blue)',
        padding: '5px',
        alignItems: 'center',
        width: '500px',
        border: '2px solid black',
        zIndex: 1,

        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',

      // backgroundColor: 'var(--color-blue)'
    },
}));

export const VideoChat = () => {
  const classes = useStyles();
  return (
    <main className='videoClass'>
        <div className={classes.wrapper}>
            {/* <h1>Welcome Home To the Video Section</h1>
            <h1>Welcome Home To the Video Section</h1>
            <h1>Welcome Home To the Video Section</h1>
            <h1>Welcome Home To the Video Section</h1> */}

            <AppBar className={classes.AppBar} position='static' color='inherit'>
                <Typography variant='h4' color='' align='center'>Doctors Appointment</Typography>
            </AppBar>

          
            <VideoPlayer />

            <Options>
                <Notifications />
            </Options>

        </div>
        
      
      
    </main>
  )
}
