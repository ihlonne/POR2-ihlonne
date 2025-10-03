import {
  Box,
  Flex,
  Image,
} from '@chakra-ui/react';
import Projects from '../components/home/Projects';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import arrow from '../assets/arrow.png';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(
      location.search
    );
    const section = params.get('scrollTo');
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        // vent til DOM er klar
        setTimeout(() => {
          el.scrollIntoView({
            behavior: 'smooth',
          });
        }, 150);
      }
    }
  }, [location]);

  return (
    <Flex
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
      <Box
        position='fixed'
        bottom='60px'
        right='20px'
        cursor='pointer'
        zIndex={1000}
        animation='bounce 2s infinite'
        _hover={{
          transform: 'translateX(-2px)',
        }}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      >
        <Image
          src={arrow}
          alt='Back to top'
          w='50px'
          h='50px'
        />
      </Box>
    </Flex>
  );
};

export default Home;
