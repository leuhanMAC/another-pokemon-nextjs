import { Grid } from "@nextui-org/react"
import { PokemonFavoriteCard } from "../pokemon"

interface props {
    favoritePokemons: number[]
}

export const FavoritesGrid = ({favoritePokemons}: props) => {
  return (
    <Grid.Container gap={2} direction="row" justify='flex-start'>
        {
          favoritePokemons.map(id => (
                <PokemonFavoriteCard pokemonId={id} key={id} />
            ))
        }
    </Grid.Container>
  )
}
