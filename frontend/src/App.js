import logo from './logo.svg';
import './App.css';
import { Box, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import DayToday from './components/DayToday';

function App() {
  const [day , setDay] = useState('');
  const [formBollean , setFormBollean] = useState(false);
  console.log('day:', day)

  return (
    <Box
     className="gym_box"
     backgroundImage= {
       day ==='legs' ? "https://static3.bigstockphoto.com/3/5/2/large1500/253026052.jpg":
       day ==='back' ? "https://c4.wallpaperflare.com/wallpaper/940/736/840/man-dark-bodybuilder-muscle-wallpaper-preview.jpg" :
       day ==='biceps' ? "https://www.muscleandfitness.com/wp-content/uploads/2019/01/Bald-Muscular-Body-Builder-Flexing-His-Biceps.jpg?quality=86&strip=all" :       
       day ==='chest' ? "https://free4kwallpapers.com/uploads/originals/2015/10/09/gym-exercise-chest-wallpaper.jpg" :       
       day ==='core' ? "https://w0.peakpx.com/wallpaper/224/628/HD-wallpaper-abs-workout-bs-health-fitness-workout.jpg" :       
       day ==='triceps' ? "https://www.muscleandfitness.com/wp-content/uploads/2014/07/Tricep-Assault.jpg?quality=86&strip=all" :       
       day ==='shoulders' ? "https://www.muscleandfitness.com/wp-content/uploads/2019/05/Shoulder-Back-Pose-1109.jpg?quality=86&strip=all" :       
        "https://i.pinimg.com/originals/62/d2/e3/62d2e322e96e614e62b88d71d56aac9b.jpg" 
     } 
     width='99vw'
     height='100vh'
     margin='0 auto'
     padding='20px 0'
     textAlign='center'
     backgroundPosition={
      day === 'legs'?"center" :
      'bottom'
     }
     backgroundRepeat='no-repeat'
     backgroundSize='cover'
     color='#fff' 
    >
      <Heading fontFamily='sans-serif' >life_is_awesome...:-)</Heading>
      <DayToday setDay={setDay}      />
    </Box>

  );
}

export default App;


