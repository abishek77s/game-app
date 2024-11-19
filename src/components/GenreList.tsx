import {
  List,
  ListItem,
  Image,
  HStack,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";
import { useGameQueryStore } from "../store";

const GenreList = () => {
  const { setGenreId, gameQuery } = useGameQueryStore();
  const { data, error, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" marginY={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem paddingY="5px" key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImage(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                fontWeight={genre.id === gameQuery.genreId ? "bold" : "normal"}
                onClick={() => setGenreId(genre.id)}
                variant="link"
                fontSize="lg"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
