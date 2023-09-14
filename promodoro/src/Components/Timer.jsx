import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from 'react'
import { Container } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import PlayButton from './PlayButton';
import Pause from './Pause';




function Timer() {
    workMinutes = 60;

    const [isPaused, setisPaused] = useState(true);
    const [Mode, setMode] = useState('work');
    const [secondsLeft, setSecondsLeft]= useState(0);
    function initTimer(){
        setSecondsLeft()
    }

    useEffect(()=>{
        initTimer();
    })
  return (
    <Container maxW={500} p={10}>
        <CircularProgressbar value={60} text={`60%`} styles={buildStyles({
            textColor:'purple',
            pathColor:'purple',
            })}/>

        <div style={{marginTop:'20px', marginLeft:'100px'}} >
            {isPaused ?  <PlayButton/> : <Pause/>}
            
            
        </div>
        
    </Container>
  );
}

export default Timer;