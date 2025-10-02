import {
  Badge,
  Box,
  Button,
  Clipboard,
  Flex,
  Heading,
  Image,
  Separator,
  Stack,
  Text,
} from '@chakra-ui/react';

import { Link, useParams } from 'react-router';
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

          <Box mt='2rem'>
            <Heading
              as='h2'
              size='md'
              fontFamily='body'
            >
              Made with:
            </Heading>
            {project.tags.map((tag) => (
              <Badge
                bg='transparent'
                border='1px solid'
                borderColor='green'
                color='green'
                key={tag}
                textTransform='uppercase'
                mr='1'
                mt='2'
              >
                {tag}
              </Badge>
            ))}
          </Box>
        </Flex>
        <Separator
          w='100%'
          color='green'
          mt='4rem'
        />
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
          <Link to={project.live}>
            <Button
              size='sm'
              bg='rose'
              color='white'
              fontWeight='semibold'
              _hover={{
                bg: 'green',
              }}
            >
              Live Preview
            </Button>
          </Link>
          <Link to={project.github}>
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
