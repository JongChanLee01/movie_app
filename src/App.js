import React from "react";
import axios from "axios";
import Movie from "./movie";

// component를 만들 때마다 모든 것을 다 구현하지 않기 위해서 extend from을 함
// react component에서 확장을 하였기 때문에 render method를 사용.
// function component는 함수이고 무언가를 return해야 함.
// class component는 class고 react component로 부터 확장됨.
// react는 자동적으로 모든 class component의 render method를 실행하고자 함
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  // js에게 componentDidMount함수가 끝날 때까지 시간이 약간 걸릴 수 있다고 알려주어야함.
  // 그걸 위해서
  // async componentDidMount(){
  //   const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
  // }
  // 이렇게 해주거나 아래처럼 하면됨

  getMovies = async() => {
    // movies.data.data.movies를 아래처럼 단축시킴
    const {
      data: {
         data: {movies}
        }
      } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // this.setState({movies:movies}); 아래처럼 줄일 수 있음 무비중 하나는 state무비 하나는 axios 무비
    this.setState({movies, isLoading: false});
  };
  componentDidMount(){
    this.getMovies();

    // 밑에 터미널 창에서 ---- npm i axios
    // js에서 data를 fetch하는 방법은 fetch를 사용함. 하지만 더 좋은 방법으론 Axios가 있음
    // axios는 fetch위에 있는 작은 layer같은 것
  }
  render(){
    const {isLoading, movies} = this.state;
    return (
      <div>
        {/* {this.state.isLoading ? "Loading" : "We are ready"} */}
        
        {/* 위에 const {isLoading} = this.state; (ES6 코드)를 새로 작성하여 밑에 this.state를 더이상 안붙여도됨*/}
        {isLoading ? "Loading..." : movies.map(movie => (
          // api에서 값을 받아오는 것이므로 movie.뒤에 있는 값은 api에서 확인 후 입력한 것
          <Movie
            key = {movie.id}
            id = {movie.id}
            year = {movie.year}
            title = {movie.title}
            summary = {movie.summary}
            poster = {movie.medium_cover_image}
          />
        ))}
      </div>
    )
  }
}

export default App;