import MovieCard from "./MovieCard";

const MovieList =({title, movies})=>{
    //console.log(movies);

    return(
    <div className="px-6 ">
        <h1 className="text-lg md:text-2xl py-4 text-white font-bold">{title}</h1>
        <div className="flex overflow-x-scroll ">
            
            <div className="flex">
                {movies?.map((movie)=>(
                <MovieCard key={movies.id} posterPath={movie.poster_path}/>
            ))}
                {/* {movies?.map((movie)=> (
            <MovieCard key={movie.id} posterPath={movies.poster_path}/>
        ))} */}
              
              </div>
        </div>
        
        
    </div>
    );
};
export default MovieList;