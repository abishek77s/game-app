import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import Screenshots from "../components/Screenshots";
import BackIcon from "../assets/backIcon";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Box padding={6}>
      <SimpleGrid
        templateAreas={{ base: ` "main"`, lg: ` "aside main"` }}
        templateColumns={{
          base: "1fr",
          lg: "1fr 600px",
        }}
      >
        <GridItem marginRight={12}>
          <Link to="/">
            <BackIcon width="28px" height="28px" color="#ffffff" />
          </Link>
          <Heading fontSize={64}>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <Screenshots gameId={game.id} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default GameDetailPage;
