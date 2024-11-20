import  Genre  from "./Genre";
import  Platform  from "./Platform";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  publishers : Publisher[]
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
  genres : Genre[]
}


interface Publisher {
  id : number ;
  name : string;
}