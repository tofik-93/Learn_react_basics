import { useEffect,useState } from "react";
import './pop.css';
// import App4 from "./new";
import Text from './text'

import StartRating from "./startRating";


const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  
function Search ({query, setQuery}){



   
    return (
        <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={setQuery}
        onChange={(e) => setQuery(e.target.value)}
      />
    )
  }
  
function Logo (){
    return (
        <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
    )
}
function Numres({movies}){ 
  if(!movies || Array.isArray(movies)){
    return null;
  }
  
    return (
        <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    )
}

function Navbar({children}){
return ( 
<nav className="nav-bar">
      <Logo />
    {children}
      </nav>
)
}
function Movie({movie}){

  return (
    <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                  </p>
                </div>
              </li>

  )
}

function MoviceList ({movies}){
  
    return (
        <ul className="list">
            {movies?.map((movie) => (
              <Movie movie={movie} key ={movie.imdID} />
            ))}
          </ul>
    )
            }
function Box({children}){
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "–" : "+"}
        </button>
        {isOpen && (
          children
        )}
      </div>
    )
}
function Summary ({watched}){
 
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
    
    return (
        
    <div className="summary">
    <h2>Movies you watched</h2>
    <div>
      <p>
        <span>#️⃣</span>
        <span>{watched.length} movies</span>
      </p>
      <p>
        <span>⭐️</span>
        <span>{avgImdbRating}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{avgUserRating}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{avgRuntime} min</span>
      </p>
    </div>
  </div>
  
     
  
  
  )
}
function Mrx ({watched}){
// if (!watched || Array.isArray(watched)){
//   return null
// }
    return (
        <ul className="list">
        {watched.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
              <p> 
                <span>{movie.imdbRating}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{movie.userRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{movie.runtime} min</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    )
}


    

function Main ({children}){
  
    return (
        <main className="main">
       {children}
        {/* <WatchedBox/> */}
      </main>
    )
}
function Loader(){
  return <p className = "loader"> Loading...</p>
} 
const KEY ="92886b3d"
export default function App1() {
  const [query  , setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched,  setWatched] = useState([]);
  const [error, setError] = useState("")

  const [ isLoading , setIsLoading] = useState(false);
   const tempQuery = "interstellar";
/*useEffect(function() {
console.log('After initial render')},[])

useEffect(function() {
  console.log('After every render')
}
)
useEffect (function (){
  console.log("D")},[query]
)

console.log('During render')*/
useEffect(function (){ 
    async function fetchMovies(){
    try{
      setIsLoading(true)
      setError("")
     const res = await fetch(
      `http://www.omdbapi.com/?apikey=${KEY} & s=${query}`)
 if(!res.ok)
  throw new Error("Something went wrong fetch movies")
 
 
      const data =await res.json()
      if(data.Response =="False") throw new Error
      ("Movie not found");
 setMovies(data.Search);
 
     }
catch (err){
  console.error(err.message);
  setError(err.message);
}
finally {
  setIsLoading(false )
  } 
} 
if (query.length < 3){
  setMovies([]);
  setError("");
  return; 
}
  fetchMovies();        
},[query]); // [] is refers the dependancies array

  return ( 
    
    <>
           <StartRating maxRating={5} />
   <StartRating maxRating={10}/>
   <StartRating />
<Text/>
      <Navbar  >
        
        
         <Search  query={query} setQuery={setQuery}/>
      <Numres movies={movies}/>
         </Navbar>
      <Main >pre

     <Box >{isLoading ? <Loader/>:
  <MoviceList movies={movies} />}
       </Box>
       <Box >
       <Summary watched={watched} />
           <Mrx  watched={watched}/>
             
       </Box>


      </Main>
      {/* <App4/> */}



     
    </>
  );
  }
