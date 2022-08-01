import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts"
import { NoFavorites, FavoritesGrid } from "../../components/ui/"
import { localFavorites } from "../../utils";

const Favorites = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(()=>{
    setFavoritePokemons(localFavorites.pokemons())
  }, []);

  return (
    <Layout
        title="Favorites"
    >

      {!favoritePokemons.length
      ? <NoFavorites />
      : <FavoritesGrid favoritePokemons={favoritePokemons} />
    }
        
    </Layout>
  )
}

export default Favorites
