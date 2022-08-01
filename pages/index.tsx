import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { GetStaticProps } from 'next';
import { pokeAPIURL } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({pokemons}) => {

  

  return (
    <Layout
      title='Listado de Pokémons'
    >
      <Grid.Container gap={ 2 } justify='flex-start'>
        {pokemons.map(pokemon => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data: PokemonListResponse | undefined = await (await fetch(`${pokeAPIURL}/pokemon?limit=151`)).json();
    

  const pokemons: SmallPokemon[] | undefined = data?.results.map((pokemon, i) => ({
    ...pokemon,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,
    id: i + 1
  }));

  return {
    props: {
      pokemons
    }
  }
}

export default Home
