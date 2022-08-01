import { useTheme, Text, Spacer, Link } from "@nextui-org/react";
import Image from 'next/image';
import NextLink from 'next/link';	
export const Navbar = () => {

    const { theme } = useTheme();

  return (
    <div style={{
        display: 'flex',
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0.5rem 1rem',
        backgroundColor: theme?.colors.red500.value
    }}>
        <NextLink href="/" passHref>
          <Link css={{display:'flex', alignItems: 'center'}}>
                  
                      <Image
                          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png'
                          alt='site-logo'
                          width={70}
                          height={70}
                      />
                      <Text color='white' h2>P</Text>
                      <Text color='white' h3>okemon</Text>
                
          </Link>
        </NextLink>

        <Spacer css={{flex:1}}/>
        <NextLink href="/favorites" passHref>
          <Link
            color='primary'
          >
            <Text>Favorites</Text>
          </Link>
        </NextLink>
    </div>
  )
}
