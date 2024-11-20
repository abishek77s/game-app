import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-Client";
import ms from 'ms';
import  Platform  from "../entities/Platform";
const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
    queryKey : ['platforms'],
    queryFn:apiClient.getAll,
    staleTime : ms('24h'), //24 hours,
    initialData: { count : platforms.length, results : platforms}
})


export default usePlatforms;