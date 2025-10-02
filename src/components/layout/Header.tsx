import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Separator,
} from '@chakra-ui/react';
import logo from '../../assets/logo.svg';
import { useState } from 'react';

function Header() {
  const CV = '/CV.pdf';
  const [active, setActive] = useState('');

  const navItems = [
    'projects',
    'about',
    'cv',
  ] as const;

  const handleNavigation = (section: string) => {
    if (section !== 'cv') {
      setActive(section);
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Flex
      align='center'
      justify='center'
      w='100%'
      gap='6'
      pt='8'
      color='text'
    >
      <Separator
        bg='green'
        height='2px'
        w={{ base: 0, md: '100%' }}
      />
      <Link
        href='/'
        _hover={{ opacity: 0.8 }}
        flexShrink={0}
      >
        <Image
          src={logo}
          alt='Personal logo'
          h='28px'
          w='28px'
        />
      </Link>

      <HStack
        display='inline-flex'
        listStyle='none'
        justifyContent='center'
        gap='8'
        textTransform='uppercase'
        fontWeight='500'
        fontSize='sm'
        m='0'
      >
        {navItems.map((item) => (
          <Box key={item} position='relative'>
            {item === 'cv' ? (
              <Link
                href={CV}
                download='CV.pdf'
                fontWeight='bold'
                color='text'
                _hover={{
                  color: 'brand.900',
                  textDecoration: 'none',
                }}
              >
                {item}
              </Link>
            ) : (
              <Link
                as='button'
                onClick={() =>
                  handleNavigation(item)
                }
                fontWeight='bold'
                color='text'
                _hover={{
                  color: 'rose',
                  textDecoration: 'none',
                }}
                textTransform='uppercase'
              >
                {item}
              </Link>
            )}
            {active === item && (
              <Box
                position='absolute'
                left='0'
                bottom='-5px'
                width='100%'
                height='2px'
                transition='0.3s ease-in-out'
              />
            )}
          </Box>
        ))}
      </HStack>
      <Separator
        bg='green'
        height='2px'
        w={{ base: 0, md: '100%' }}
      />
    </Flex>
  );
}

export default Header;
