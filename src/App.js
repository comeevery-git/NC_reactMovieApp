import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// application render -> isLoading -> mount -> async await getMovies
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
    this.setState({ movies, isLoading: false })
    console.log("getMovies.");
  };
  componentDidMount() {
    console.log("render로 컴포넌트를 DOM에 부착한 후 Mount가 완료된 후 componentDidMount가 호출됩니다.");
    this.getMovies();
  };
  componentWillMount() {
    console.log("컴포넌트가 시작되면 우선 context, defaultProps와 state를 저장합니다. 그 후에 componentWillMount 메소드를 호출합니다.");
  };
  render() {
    const { isLoading, movies } = this.state;
    return <section className="container">{isLoading ? 
      (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>;
  }
}

export default App;