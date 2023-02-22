import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    }
    getMovies = async () => {
        const {data: {data: {movies}} }= await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        console.log(movies);
        this.setState( { isLoading: false } );
        this.setState( { movies } );
    }
    componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;
        return(
            <section class="container">
                {isLoading ?
                    (<div class="loader">
                        <span class="loader_txt"> Loading... </span>
                    </div>)
                    :
                   ( <div class="movies">
                       {movies.map(movie => {
                            return (<Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.poster} />)
                        } )}
                    </div>)
                }

            </section>
        );
    }
}

export default App;
