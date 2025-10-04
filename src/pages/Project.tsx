import {
  Box,
  Button,
  Clipboard,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';

import { useParams } from 'react-router';
import { projects } from '../data/mock-data';

const Project = () => {
  const url = window.location.href;

  const { title } = useParams<{
    title: string;
  }>();
  const project = projects.find(
    (p) =>
      p.title.toLowerCase() ===
      title?.toLowerCase()
  );

  if (!project) {
    return <Text>Project not found</Text>;
  }

  return (
    <Flex
      as='main'
      justifyContent='center'
      minH='100dvh'
      w='100%'
      gap='4rem'
      my='4rem'
      mx='auto'
    >
      <Flex
        direction='column'
        maxW='1000px'
        w='100%'
        p={4}
      >
        <Box maxW='1000px' w='100%'>
          <Image
            src={project.image}
            alt='project image'
            w='100%'
          />
        </Box>
        <Flex
          direction='column'
          w='full'
          mt='4rem'
        >
          <Flex
            justifyContent='space-between'
            w='full'
            alignItems='center'
          >
            <Heading as='h1' fontSize='3xl'>
              {project.title}
            </Heading>
            <Clipboard.Root value={url}>
              <Clipboard.Trigger asChild>
                <Button
                  variant='surface'
                  size='sm'
                >
                  <Clipboard.Indicator />
                  <Clipboard.CopyText />
                </Button>
              </Clipboard.Trigger>
            </Clipboard.Root>
          </Flex>
          <Box position='relative' mt='4rem'>
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

          <Flex
            alignItems='end'
            gap='4'
            mt='2rem'
          >
            <Heading
              as='h2'
              size='md'
              fontFamily='body'
            >
              Made with:
            </Heading>
            <Flex gap='2'>
              {project.tags.map((tag) => (
                <Text
                  key={tag}
                  textDecor='underline'
                  textDecorationStyle={'wavy'}
                  textUnderlineOffset='6px'
                  textDecorationThickness='2px'
                >
                  {tag}
                </Text>
              ))}
            </Flex>
          </Flex>
        </Flex>

        <Flex
          my='4rem'
          direction='column'
          color='black'
          gap='2rem'
        >
          <Box>
            <Heading
              as='h2'
              size='lg'
              mb={4}
              fontFamily='body'
            >
              Description
            </Heading>
            <Text>{project.description} </Text>
          </Box>
          <Flex
            direction={{
              base: 'column',
              md: 'row',
            }}
            gap={{ base: '2rem', md: '4rem' }}
          >
            <Box>
              <Heading
                as='h2'
                size='lg'
                mb={4}
                fontFamily='body'
              >
                Features
              </Heading>
              {project.features?.map(
                (feature) => (
                  <Text key={feature}>
                    {feature}
                  </Text>
                )
              )}
            </Box>
            <Box>
              <Heading
                as='h2'
                size='lg'
                mb={4}
                fontFamily='body'
              >
                Tech Stack
              </Heading>
              {project.techStack?.map((stack) => (
                <Text key={stack}>{stack}</Text>
              ))}
            </Box>
          </Flex>
        </Flex>
        <Stack direction='row' gap={4}>
          <Link
            href={project.live}
            target='_blank'
          >
            <Button
              size='sm'
              bg='rose'
              color='white'
              fontWeight='semibold'
              textTransform='uppercase'
              _hover={{
                bg: 'green',
              }}
            >
              Live Preview
            </Button>
          </Link>
          <Link
            href={project.github}
            target='_blank'
          >
            <Button
              size='sm'
              variant='outline'
              border='1px solid'
              borderColor='rose'
              color='rose'
              fontWeight='semibold'
              _hover={{
                bg: 'transparent',
                borderColor: 'green',
                color: 'green',
              }}
            >
              GitHub
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Project;
