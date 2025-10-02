import {
  Flex,
  Heading,
  Text,
  Image,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';

import selfie from '../../assets/selfie2.png';
import flowers from '../../assets/flowers.png';

const About = () => {
  const top = useBreakpointValue({
    base: '-100px',
    md: '-95px',
    lg: 'unset',
  });
  const bottom = useBreakpointValue({
    base: 'unset',
    md: 'unset',
    lg: '-15px',
  });
  const left = useBreakpointValue({
    base: 'unset',
    md: 'unset',
    lg: '-110px',
  });
  const right = useBreakpointValue({
    base: '50px',
    md: '0px',
    lg: 'unset',
  });
  const rotate = useBreakpointValue({
    base: '70deg',
    md: '-65deg',
    lg: '-50deg',
  });

  return (
    <Flex
      direction='column'
      minH='100dvh'
      maxW='1290px'
      w='100%'
      justifyContent='center'
      mt={{ base: '2rem', md: 0 }}
    >
      <Flex
        gap='1rem'
        direction={{
          base: 'column',
          lg: 'row',
        }}
        justify='center'
        align='center'
      >
        <Flex
          direction='column'
          justify='center'
          fontSize={{ base: 'sm', md: 'md' }}
          paddingRight={{
            base: 0,
            lg: '4rem',
          }}
        >
          <Heading
            as='h2'
            size='4xl'
            mb='4'
            paddingRight={{
              base: 0,
              md: '4rem',
            }}
          >
            Who am I
            <Text as='span' color='rose'>
              ?
            </Text>
          </Heading>

          <Flex
            position='relative'
            direction='column'
            borderWidth='3px'
            borderStyle='dashed'
            borderColor='rose'
            gap='2'
            padding='2rem'
          >
            <Text>
              Hi, I’m Ingelinn Helene — a
              front-end developer who loves
              creating things.
            </Text>

            <Text>
              It all began back when I was a
              teenager, customizing Tumblr themes
              and experimenting with HTML, CSS,
              and Photoshop. What started as
              late-night tinkering slowly grew
              into a passion for building and
              design, and today I channel that
              same curiosity into front-end
              development and UX/UI design.
            </Text>

            <Text>
              I originally trained as a data
              electronics technician, but I
              quickly realized that what excites
              me most is the creative side of tech
              — combining logic and design to
              build thoughtful, accessible, and
              user-friendly digital experiences.
            </Text>

            <Text>
              Outside of coding, you’ll usually
              find me knitting, reading fantasy
              books, baking sourdough bread with
              my starter Braum, or staying active.
              Creativity flows into everything I
              do, whether it’s code, yarn, or
              recipes — and that’s what keeps me
              inspired. 💫
            </Text>

            <Box
              position='absolute'
              top={top}
              bottom={bottom}
              left={left}
              right={right}
              mt='4'
              transform={`rotate(${rotate})`}
            >
              <Image
                src={flowers}
                alt='flowers'
                w={useBreakpointValue({
                  base: '80px',
                  md: '120px',
                  lg: '150px',
                })}
                transform={{
                  base: 'scaleX(-1)',
                  md: 'none',
                }}
              />
            </Box>
          </Flex>
        </Flex>

        <Image
          src={selfie}
          alt='cartoon selfie of developer'
          maxW='280px'
          display={{
            base: 'none',
            lg: 'block',
          }}
        />
      </Flex>
    </Flex>
  );
};

export default About;
