import React, { useState } from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Filter from "./components/treatment/filter";
import Validation from "./components/Form/Validation";

const App=()=>{
    const Films = [
        { title: "Inception", director: "Christopher Nolan", releaseYear: 2010, genre: "Science Fiction", rating: 8.8 },
        { title: "The Godfather", director: "Francis Ford Coppola", releaseYear: 1972, genre: "Crime", rating: 9.2 },
        { title: "The Dark Knight", director: "Christopher Nolan", releaseYear: 2008, genre: "Action", rating: 9.0 },
        { title: "Pulp Fiction", director: "Quentin Tarantino", releaseYear: 1994, genre: "Crime", rating: 8.9 },
        { title: "Schindler's List", director: "Steven Spielberg", releaseYear: 1993, genre: "Historical Drama", rating: 9.0 },
        { title: "The Shawshank Redemption", director: "Frank Darabont", releaseYear: 1994, genre: "Drama", rating: 9.3 },
        { title: "Forrest Gump", director: "Robert Zemeckis", releaseYear: 1994, genre: "Comedy-Drama", rating: 8.8 },
        { title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", releaseYear: 1999, genre: "Science Fiction", rating: 8.7 },
        { title: "Fight Club", director: "David Fincher", releaseYear: 1999, genre: "Drama", rating: 8.8 },
        { title: "The Lord of the Rings: The Return of the King", director: "Peter Jackson", releaseYear: 2003, genre: "Fantasy", rating: 9.0 }
      ];

    const [liste, setListe] = useState(Films);
    const addFilms = (newFilm) => {
        setListe((prevFilms) => [...prevFilms, newFilm]);
      };
    return(<div>
        <Header/>
        <div className="main">
          <h2>Films</h2>
          <Filter films={liste}/>
            <h2>Ajouter Film</h2>
          </div>
          <form action="">
              <Validation onAdd={addFilms}/>
          </form>
        <Footer/>
    </div>)
}
export default App;