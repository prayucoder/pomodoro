

import { Button, Container, VStack, Text } from '@chakra-ui/react';

import React, { useState, useEffect } from 'react';
import "../Styles/Header.css";


function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes === 0) {
            
            setMinutes(5); 
            
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <Container maxW = {"100%"} h={"100vh"}  p={"16"} style={{background: "linear-gradient(to right, #9900ff, #cc80ff)"}}>
      <form>   
    
            <VStack alignItems={"inherit"} width={["full",96]} spacing={10} m={"auto"} my={16}>
            
              <h1 style={{fontSize:"20px", margin:"auto"}}>Pomodoro Timer</h1>
              
              <Text alignItems={"center"} m={"auto"} spacing={8} h={30} className='size'>
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </Text>
              
              <Button  variant={"solid"} onClick={startTimer}>Start</Button>
              <Button onClick={pauseTimer}>Pause</Button>
              <Button onClick={resetTimer}>Reset</Button>
            
                       
            </VStack>
    </form>

</Container>
  );
}

export default PomodoroTimer;
