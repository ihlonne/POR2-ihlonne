import {
  Flex,
  HStack,
  Link,
  Separator,
} from '@chakra-ui/react';
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function Footer() {
  return (
    <Flex
      align='center'
      justify='center'
      w='100%'
      p='2.5rem 0'
      gap='10'
      id='footer'
    >
      <Separator
        bg='green'
        height='2px'
        w='100%'
        display={{ base: 'none', md: 'block' }}
      />

      <HStack
        as='ul'
        display='inline-flex'
        gap='8'
        textTransform='uppercase'
        fontWeight='500'
        fontSize='xs'
      >
        <Link
          href='https://github.com/ihlonne'
          target='_blank'
          fontWeight='bold'
          color='text'
          _hover={{ textDecoration: 'none' }}
        >
          <FaGithub />
          GitHub
        </Link>
        <Link
          href='https://www.linkedin.com/in/ingelinnhelenelonne/'
          target='_blank'
          fontWeight='bold'
          color='text'
          _hover={{ textDecoration: 'none' }}
        >
          <FaLinkedin />
          LinkedIn
        </Link>
        <Link
          href='mailto:ingelinn92@gmail.com'
          fontWeight='bold'
          color='text'
          _hover={{ textDecoration: 'none' }}
        >
          <SiGmail /> GMail
        </Link>
      </HStack>
      <Separator
        bg='green'
        height='2px'
        maxW='100%'
        w='100%'
        display={{ base: 'none', md: 'block' }}
      />
    </Flex>
  );
}

export default Footer;
