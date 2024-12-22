import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import getCroppedImage from "../services/image-url";

interface Props {
  gameId: number;
}

const Screenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  if (isLoading) return null;

  if (error) throw error;
  return (
    <SimpleGrid marginY={10} columns={{ lg: 2, sm: 1 }} spacing={2}>
      {data?.results.map((s) => (
        <Image
          borderRadius={8}
          key={s.id}
          src={getCroppedImage(s.image, "wx")}
        />
      ))}
    </SimpleGrid>
  );
};

export default Screenshots;
