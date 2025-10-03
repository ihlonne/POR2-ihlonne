import {
  Box,
  Flex,
  Image,
} from '@chakra-ui/react';
import Projects from '../components/home/Projects';
import Hero from '../components/home/Hero';
import About from '../components/home/About';

import arrow from '../assets/arrow.png';

const Home = () => {
  return (
    <>
      <Flex
        as='main'
        direction='column'
        align='center'
        justify='center'
        minH='100dvh'
        w={{ base: '90%', lg: '100%' }}
        mt={{ base: '2rem', md: 0 }}
        mx='auto'
      >
        <Hero />
        <div id='projects'>
          <Projects />
        </div>
        <div id='about'>
          <About />
        </div>
      </Flex>
      <Box
        position='fixed'
        bottom='60px'
        right='20px'
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
        cursor='pointer'
        _hover={{
          opacity: '0.6',
          transform: 'translateX(-2px)',
        }}
      >
        <Image
          src={arrow}
          alt='down arrow'
          w='80px'
        />
      </Box>
    </>
  );
};

export default Home;
