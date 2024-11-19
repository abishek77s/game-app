import meh from "../assets/meh.png";
import excep from "../assets/excep.png";
import ok from "../assets/ok.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "30px" },
    4: { src: ok, alt: "okayish", boxSize: "35px" },
    5: { src: excep, alt: "exceptional", boxSize: "30px" },
  };

  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
