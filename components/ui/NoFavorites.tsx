import { Container, Image, Text } from "@nextui-org/react"

export const NoFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height:'calc(100vh - 100px)',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
      }}>
          <Text h1>{'No Favorites :('}</Text>
          <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
            alt="No Favorites"
            width={200}
            height={200}
          />
      </Container>
  )
}
