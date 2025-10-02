import { Flex } from '@chakra-ui/react';
import Projects from '../components/home/Projects';
import Hero from '../components/home/Hero';
import About from '../components/home/About';

const Home = () => {
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
      <Projects />
      <About />
    </Flex>
  );
};

export default Home;
