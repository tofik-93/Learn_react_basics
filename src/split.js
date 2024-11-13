import {useState} from "react";

import React from "react-dom";

const temMovieData = [
   { imdbID:"tt1375666",
    Title:"Inception,",
    Year:"2010",
    Poster:"https://media.istockphoto.com/id/679915254/photo/times-square-in-new-york-city.jpg?s=612x612&w=0&k=20&c=KqapZJtNC-b81mj7TdxnJcmwv9bC6Bys9BX00QaKQKI="
    
},
{ imdbID:"tt1373666",
    Title:"The Matrix,",
    Year:"2010",
    Poster:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.europosters.eu%2Fimage%2F750%2Fposters%2Favatar-limited-ed-one-sheet-sun-i7182.jpg&tbnid=oftMzI4l8JqSiM&vet=10CAwQxiAoA2oXChMIsJHWtrCiggMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.abposters.com%2Fposters%2Favatar-limited-ed-one-sheet-sun-v13494&docid=4Guza4IxxrYWhM&w=480&h=720&itg=1&q=poster&ved=0CAwQxiAoA2oXChMIsJHWtrCiggMVAAAAAB0AAAAAEAc",
    runtime:148,
    imdbRating:8.8,
    userRating:10,

},
{ imdbID:"tt1323666",
    Title:"Inception,",
    Year:"2010",
    Poster:"",
    
},
{ imdbID:"tt1373666",
Title:"Parasite",
Year:"2012",
Poster:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.europosters.eu%2Fimage%2F750%2Fposters%2Favatar-limited-ed-one-sheet-sun-i7182.jpg&tbnid=oftMzI4l8JqSiM&vet=10CAwQxiAoA2oXChMIsJHWtrCiggMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.abposters.com%2Fposters%2Favatar-limited-ed-one-sheet-sun-v13494&docid=4Guza4IxxrYWhM&w=480&h=720&itg=1&q=poster&ved=0CAwQxiAoA2oXChMIsJHWtrCiggMVAAAAAB0AAAAAEAc",
runtime:148,
imdbRating:8.8,
userRating:10,

},
{ imdbID:"tt1373666",
    Title:"the survival",
    Year:"2012",
    Poster:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.europosters.eu%2Fimage%2F750%2Fposters%2Favatar-limited-ed-one-sheet-sun-i7182.jpg&tbnid=oftMzI4l8JqSiM&vet=10CAwQxiAoA2oXChMIsJHWtrCiggMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.abposters.com%2Fposters%2Favatar-limited-ed-one-sheet-sun-v13494&docid=4Guza4IxxrYWhM&w=480&h=720&itg=1&q=poster&ved=0CAwQxiAoA2oXChMIsJHWtrCiggMVAAAAAB0AAAAAEAc",
    runtime:116,
    imdbRating:8.35,
    userRating:10,

},
]
function Array(){
  
   { 
    const studentinfo =[
        "tofik","ugr/2271/13","software","section 1","male","single"
    ]
    
    React.createElement(
        "ul",
        {className:"stud"},
        studentinfo.map(stud=>React.createElement("li", null,stud))
    
    )}
    
}

const average = (arr) =>
    arr.reduce((acc, cur,i,arr) => acc + cur /arr.length,0)
export default function Training(){
const [query,setQuery] = useState("");
const [movies,setMovies] = useState();
const [watched, setWatched] = useState();
const [isOpen1, setIsOpen1] = useState(true);
const [isOpen2, setIsOpen2] = useState(true);

const avgIndbRating = average(watched.map((movie)=>
   movie.indbRating 
))
const avgUserRating = average(watched.map((movie)=>
movie.userRating));

const avgRuntime = average(watched.map((movie) =>
movie.runtine))


return(
    <>
    <nav className="nave-bar">
        <div className="logo">
            <span role="img">🧸</span>
            <h1>usePopcorn</h1>

        </div>
        <input clasName="search" 
        type="text" placeholder="Search movies..."
        value ={query}
        onChange={(e)=> setQuery(e.target.value)}
        />
        <p className="num-result">
            Foun  <strong>{movies.length}</strong> results
        </p>   
    </nav>

    <main className="main">
  <div className="box">
  <button className="btn-toggle" onClick = {() => setIsOpen1((open) => !open)}>
    {isOpen1 ? "-" : "+"}
  </button>
  {isOpen1 && (
    <ul className="list">
        {movies?.map((movie)=>(
            <li key={movie.indbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`}/>
                <h1>{movie.Title}</h1>
                <div>
                    <p>
                        <span>📋</span>
                        <span>{movie.year}</span>
                    </p>
                </div>
            </li>
        ))}
    </ul>
  )}

<div className="box">
    <button className="btn-toggle"
    onClick={()=>setIsOpen2((open) => !open)}>
        {isOpen2 ? "-" :"+"}

    </button>
    {
        isOpen2 && (
            <>
            <div className="summary">
                <h2>Movies you watched</h2>
                <div>
                    <p>
                        <span>🇵🇸</span>
                        <span>
                        {watched.length} movies </span>
                        </p>
                        <p>
                            <span>⭐</span>
                        <span>{avgIndbRating}</span>
                        </p>
                        <p>
                            <span>💥</span>
                        <span>{avgUserRating}</span>
                        </p>
                        <p>
                            <span>⏰</span>
                        <span>{avgRuntime}</span>
                        </p>
                </div>
            </div>
            <div className="list">
                {watched.map((movie)=>(
                    <li key={movie.imdbID}>
                        <img src={movie.Poster} alt={`${movie.Title} poster`}/>
                        <h3>{movie.Title}</h3>
                        <div>

                        <p>
                            <span>⭐</span>
                        <span>{movie.indbRating}</span>
                        </p>
                        <p>
                            <span>💥</span>
                        <span>{movie.userRating}</span>
                        </p>
                        <p>
                            <span>⏰</span>
                        <span>{movie.runtime}</span>
                        </p>
                </div>
                        
</li>
                ))}
            </div>
            </>
        )
    }
</div>
  </div>
    </main>
    </>
    

)




}
