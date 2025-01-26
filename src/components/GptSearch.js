import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () =>{
    return (
        <> 
        <div className="absolute -z-10">
        <img className="  min-h-screen object-cover " src={BG_URL} alt="logo"/>
    </div>
    <div className="">
          
          <GptSearchBar/>
          <GptMovieSuggestions/>
      </div>
      </>
    
    );
};
export default GPTSearch;