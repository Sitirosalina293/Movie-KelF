import "./App.css";

import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import LoadingSpinner from "./Loaders/LoadingSpinner";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const getMovieRequest = async () => {
    setIsLoading(true);
    const url = `http://www.omdbapi.com/?s=star wars&apikey=5bba1f0e`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setIsLoading(false);
      console.log(responseJson.Search);
    }
    if (responseJson.Error) {
      setMovies([]);
      setError("No movies found");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="mx-auto max-w-screen hidden lg:block">
      <NavBar />
      <div className="ml-[300px] px-[50px]">
        <div className="py-10 flex flex-col gap-[50px]">
          <Profile />
          <div>
            <div className="font-semibold text-[22px] text-black mb-4">Movie</div>
            <div className="__scroll-selector">
              <div className="grid gap-4 grid-cols-4 grid-rows-3">
                {
                  isLoading ? <LoadingSpinner /> : <MovieList movies={movies} />
                }
                {
                  error && <div className="text-red-500">{error}</div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
