import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';

import selfie from '../../assets/selfie1.png';
import doodle from '../../assets/doodle.png';

const Hero = () => {
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      justifyContent='space-between'
      alignItems='center'
      minH='100dvh'
      maxW='1100px'
      w='100%'
      mt={{ base: 0, md: '4rem', lg: 0 }}
      gap={{ base: '2rem', md: '2rem' }}
    >
      <Box
        maxW={{ base: '250px', md: '350px' }}
        w='full'
        flexShrink='0'
      >
        <Image
          src={selfie}
          alt='cartoon image of the developer'
          w='full'
          h='full'
        />
      </Box>
      <Flex
        direction='column'
        flex='1'
        maxW='650px'
        w='full'
      >
        <Flex
          position='relative'
          direction='column'
          textAlign={{
            base: 'center',
            md: 'left',
          }}
        >
          <Box
            display={{
              base: 'none',
              md: 'block',
            }}
            position='absolute'
            bottom='-80px'
            right='-10px'
            zIndex={{ base: 'unset', md: '5' }}
          >
            <Image
              src={doodle}
              alt='doodle'
              w='150px'
            />
          </Box>
          <Heading
            as='h1'
            size={{ base: '3xl', md: '5xl' }}
            letterSpacing='5px'
          >
            Hi
            <Text as='span' color='rose'>
              ,
            </Text>{' '}
            I'm Ingelinn
            <Text as='span' color='rose'>
              !
            </Text>
          </Heading>
          <Text
            color='pink'
            wordBreak='break-word'
            whiteSpace='normal'
            letterSpacing={{
              base: '4px',
              md: '10px',
            }}
            fontSize={{ base: 'md', md: 'lg' }}
          >
            /-in•geh•linn he•le•neh /
          </Text>
        </Flex>
        <Flex
          direction='column'
          m={{ base: '2rem auto', md: '2rem 0' }}
          w='100%'
          textAlign={{
            base: 'center',
            md: 'left',
          }}
        >
          <Box
            position='relative'
            display='inline-block'
            mb='1rem'
          >
            <Heading
              as='h2'
              textTransform='uppercase'
              fontFamily='body'
              fontSize={{ base: 'xl', md: '4xl' }}
              letterSpacing='1px'
              color='pink'
              position='relative'
              zIndex={1}
            >
              Application Developer
            </Heading>

            <Box
              position='absolute'
              bottom='-4px'
              left={0}
              w='100%'
              h='8px'
              bg='rose'
              opacity='0.7'
              transform='rotate(-1deg)'
              borderRadius='2px'
              zIndex={0}
            />

            <Box
              position='absolute'
              bottom='-10px'
              left='10px'
              w='95%'
              h='10px'
              bg='pink'
              opacity='0.4'
              transform='rotate(1deg)'
              borderRadius='2px'
              zIndex={0}
            />
            <Box
              position='absolute'
              bottom='-10px'
              left='10px'
              w='95%'
              h='10px'
              bg='pink'
              opacity='0.4'
              transform='rotate(1deg)'
              borderRadius='2px'
              zIndex={0}
            />
            <Box
              position='absolute'
              bottom='-10px'
              left='10px'
              w='95%'
              h='10px'
              bg='pink'
              opacity='0.4'
              transform='rotate(1deg)'
              borderRadius='2px'
              zIndex={0}
            />
            <Box
              position='absolute'
              bottom='-10px'
              left='10px'
              w='95%'
              h='10px'
              bg='pink'
              opacity='0.4'
              transform='rotate(0deg)'
              borderRadius='2px'
              zIndex={0}
            />
          </Box>

          <Text>
            Based in Bergen, Norway, I will soon
            start work as an Application Developer
            at Framo, where I get to combine
            creativity and problem-solving to
            build meaningful digital solutions. My
            background in front-end development
            has given me a strong eye for
            accessibility and thoughtful design,
            and I’m always curious to learn more
            and refine my craft. 🌸
          </Text>
        </Flex>
        <Button
          width='fit-content'
          bg='rose'
          color='white'
          fontWeight='600'
          textTransform='uppercase'
          fontSize='xs'
          borderRadius='sm'
          px={6}
          py={3}
          opacity='0.8'
          boxShadow='-4px 4px 0px #B89C9B'
          _hover={{
            opacity: '0.6',
            bg: 'pink',
            boxShadow: '-3px 3px 0px #a08180ff',
            transform: 'translateY(-2px)',
          }}
          alignSelf={{
            base: 'center',
            md: 'unset',
          }}
        >
          View Projects
        </Button>
      </Flex>
    </Flex>
  );
};

export default Hero;
