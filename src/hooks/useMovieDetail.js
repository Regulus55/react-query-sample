import axios from 'axios';
import {useQuery} from "@tanstack/react-query";

const getMovieDetail = async (movieId) => {

    const config = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODRkNTI0MTVmNzNjNmY1MjI2ZGM2ZWZjNDE1MzMyMCIsIm5iZiI6MTcyMjg1NTA4Ni4zODU4MzYsInN1YiI6IjY2NWRhNGNkZDZjYzQxYWUxMGNjNzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xUI7XL6sf0f0Jv9qL31CmlT6qVcRodrFs_aEncGCClk'
        }
    }
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
    const {data} = await axios.get(url, config)
    return data
}

const useMovieDetail = (movieId) => {
    return useQuery({
        queryKey: [movieId],
        queryFn: () => getMovieDetail(movieId)
    })
}

export default useMovieDetail;