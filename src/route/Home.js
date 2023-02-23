import React from "react";
import axios from "axios";
import Movie from "../component/Movie";

class Home extends React.Component {
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
            <section className="container">
                {isLoading ?
                    (<div className="loader">
                        <span className="loader_txt"> Loading... </span>
                    </div>)
                    :
                    ( <div className="movies">
                        {movies.map(movie => {
                            return (<Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.poster}
                                genres={movie.genres}
                            />)
                        } )}
                    </div>)
                }

            </section>
        );
    }
}

export default App;
