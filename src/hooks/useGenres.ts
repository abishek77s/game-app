import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-Client";
import genres from "../data/genres";
import ms from "ms";
import { Genre } from "../assets/entities/Genre";


const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), // 24 hours
    initialData: { count: genres.length, results: genres }
});

export default useGenres;