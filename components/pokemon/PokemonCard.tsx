import { Card, Row, Text, Grid } from "@nextui-org/react"
import { useRouter } from "next/router";
import { SmallPokemon } from "../../interfaces"

interface Props{
    pokemon: SmallPokemon
}

export const PokemonCard = ({pokemon}: Props) => {

    const {id, name, img} = pokemon;
    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${name}`);
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1}>
            <Card 
                isHoverable 
                isPressable
                onClick={onClick}
            >
                    <Card.Body>
                        <Card.Image 
                        src={img}
                        width={'100%'}
                        height={140}
                        />
                    </Card.Body>
                    <Card.Footer>
                        <Row justify='space-between'>
                            <Text transform='capitalize'>
                                #{id} - {name}
                            </Text>
                        </Row>
                    </Card.Footer>
            </Card>
        </Grid>
    )
}
