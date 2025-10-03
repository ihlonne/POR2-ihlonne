import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import type { Project } from '../../types/project';
import washi from '../../assets/washi.png';
import { useNavigate } from 'react-router';

type ProjectCardProps = Project;

const ProjectCard = ({
  title,
  image,
  description,
  tags,
}: ProjectCardProps) => {
  const navigate = useNavigate();
  return (
    <Box
      maxW='500px'
      w='full'
      borderRadius='lg'
      transition='all 0.2s ease-in-out'
      shadow='12px 12px 2px 1px rgba(184, 153, 135, 0.2)'
      _hover={{
        transform: 'scale(1.02)',
        shadow:
          '12px 12px 2px 1px rgba(128, 96, 96, 0.53)',
      }}
      onClick={() => {
        navigate(`/projects/${title}`);
        window.scrollTo(0, 0);
      }}
      cursor='pointer'
      p='2'
    >
      <Box
        maxW='500px'
        w='100%'
        position='relative '
      >
        <Box
          position='absolute'
          top='10px'
          left='-30px'
          zIndex={5}
          transform='rotate(140deg)'
          opacity={0.8}
          mixBlendMode='multiply'
        >
          <Image
            src={washi}
            alt='washi tape'
            w='100px'
          />
        </Box>

        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          borderRadius='lg'
          mb={4}
          w='100%'
        />
        <Box
          position='absolute'
          bottom='-10px'
          right='-30px'
          zIndex={5}
          transform='rotate(130deg)'
          opacity={0.8}
          mixBlendMode='multiply'
        >
          <Image
            src={washi}
            alt='washi tape'
            w='100px'
          />
        </Box>
      </Box>
      <Box p='2'>
        <Heading as='h2' size='xl' mb={2}>
          {title}
        </Heading>
        <Flex gap={2} wrap='wrap' mb={4}>
          {tags.map((tag) => (
            <Badge
              bg='transparent'
              border='1px solid'
              borderColor='green'
              color='green'
              key={tag}
              textTransform='uppercase'
            >
              {tag}
            </Badge>
          ))}
        </Flex>
        <Text mb={6} lineClamp={2}>
          {description}
        </Text>
        <Text
          color='rose'
          fontWeight='semibold'
          textDecor='underline'
          textDecorationStyle={'wavy'}
          textUnderlineOffset='6px'
          textDecorationThickness='2px'
        >
          More Details
        </Text>
      </Box>
    </Box>
  );
};

export default ProjectCard;
