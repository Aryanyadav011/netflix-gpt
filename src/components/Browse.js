
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () =>{
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();

    // const dispatch= useDispatch();

    // const getNowPlayingMovie = async()=>{
    //     const  data = await fetch(
    //        'https://api.themoviedb.org/3/movie/now_playing?page=1',
    //        API_OPTIONS
    //         );
    //         const json = await data.json();
    //         console.log(json.results);
    //         dispatch(addNowPlayingMovies(json.results));
      

    // };
    // useEffect(()=>{
    //     getNowPlayingMovie();
    // },[]);
    return(
        <div>
            <Header/>
            {
              showGptSearch ? (
              <GptSearch/> 
              ):  (
              <>
             <MainContainer/>
              <SecondaryContainer/>
              </>
            )}
          
            
        </div>
    );
};
export default Browse;