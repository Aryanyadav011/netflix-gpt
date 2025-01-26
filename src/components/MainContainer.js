import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer =()=>{
    const movies = useSelector(store=> store.movies?.nowPlayingMovies);

    if(!movies) return;

    const mainMovie= movies[0];
    //console.log(mainMovie);

    const{original_title, overview,Id} = mainMovie;

    return<div className="pt-[15%] bg-black md:pt-0">
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={Id}/>

    </div>;
};
export default MainContainer;