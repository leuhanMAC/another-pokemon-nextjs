import { Button as Link, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { useEffect, useState } from "react";
import { pokeAPIURL } from "../../api";
import { Layout } from "../../components/layouts"
import { Pokemon, PokemonListResponse, SmallPokemon } from "../../interfaces";
import { getPokemonInfo, localFavorites } from "../../utils";
import confetti from "canvas-confetti";


interface Props {
    pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({pokemon}) => {

const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const [isInFavorites, setisInFavorites] = useState(false);

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id);
        setisInFavorites(!isInFavorites);

        if ( isInFavorites ) return;

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin:{
                x: 1,
                y: 0
            }

        })
    }

    useEffect(() => {
      setisInFavorites(localFavorites.isPokemonInFavorites(pokemon.id));
    }, [pokemon.id, isInFavorites]);
    
  return (
    <Layout title={`#${pokemon.id} - ${name} | PokeAPI`}>
        <Grid.Container
            css={{marginTop:'5px'}}
            gap={2}
        >
            <Grid xs={12} sm={4}>
                <Card isHoverable css={{padding: '30px'}}>
                    <Card.Body>
                        <Card.Image 
                            src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
                            alt={pokemon.name}
                            width={'100%'}
                            height={200}
                        />
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs={12} sm={8}>
                <Card>
                    <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
                        <Text h1 transform='capitalize'>{pokemon.name}</Text>
                        <Link
                            color='gradient'
                            ghost={!isInFavorites}
                            onClick={() => onToggleFavorite()}
                        >
                            {!isInFavorites ? 'Save on Favorites' : 'Remove from Favorites'}
                        </Link>
                    </Card.Header>
                    <Card.Body>
                        <Text size={30}>Sprites:</Text>
                        <Container direction="row" display="flex">
                            <Image 
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image 
                                src={pokemon.sprites.back_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image 
                                src={pokemon.sprites.front_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image 
                                src={pokemon.sprites.back_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                        </Container>
                    </Card.Body>
                </Card>
            </Grid>

        </Grid.Container>
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const data:PokemonListResponse = await (await fetch(`${pokeAPIURL}/pokemon?limit=151`)).json();

    const pokemon151: string[] = data.results.map((pokemon) => (pokemon.name))


    return {
        paths: pokemon151.map(name => 
                ({ 
                    params:{name} 
                })
            ),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  
    const { name } = params as { name: string };
    const pokemon = await getPokemonInfo(name.toLowerCase());

    if (!pokemon){
        return {
            redirect: {
                destination: '/',	
                permanent: false,
            }
        }
    }

    return {
        props: {
            pokemon
        }
    }
  }

export default PokemonByNamePage;