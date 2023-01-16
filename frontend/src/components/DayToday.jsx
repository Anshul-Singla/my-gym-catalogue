import { Box, Button, Code, Flex } from '@chakra-ui/react';
import React from 'react'

const DayToday = ({setDay}) => {
  return (
    <>
        <Code> What was your day today...???</Code>
        <Flex 
            m='20px auto'
            justifyContent='space-evenly'
            wrap='nowrap'
        >
            <Button onClick={ _ => setDay("back")} colorScheme='teal' variant='solid'>
                BACK
            </Button>
            <Button  onClick={ _ => setDay("biceps")}  colorScheme='teal' variant='solid'>
                BICEPS
            </Button>
            <Button  onClick={ _ => setDay("chest")}  colorScheme='teal' variant='solid'>
                CHEST
            </Button>
            <Button  onClick={ _ => setDay("core")}  colorScheme='teal' variant='solid'>
                CORE
            </Button>
            <Button  onClick={ _ => setDay("legs")}  colorScheme='teal' variant='solid'>
                LEGS
            </Button>
            <Button  onClick={ _ => setDay("triceps")}  colorScheme='teal' variant='solid'>
                TRICEPS
            </Button>
            <Button  onClick={ _ => setDay("shoulders")}  colorScheme='teal' variant='solid'>
                SHOULDERS
            </Button>
            {/* <Button colorScheme='teal' variant='solid'>
                CORE
            </Button> */}

        </Flex>

    </>
  )
}

export default DayToday;
