import {
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import ProjectCard from './ProjectCard';
import { projects } from '../../data/mock-data';

const Projects = () => {
  return (
    <Flex
      direction='column'
      align='flex-start'
      maxW='1290px'
      w='100%'
      mt={{ base: '2rem', md: 0 }}
    >
      <Heading as='h1' mb='2rem' size='4xl'>
        Browse Projects
        <Text as='span' color='rose'>
          ,
        </Text>
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={12}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Projects;
