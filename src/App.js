import React from "react";
import axios from "axios";

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
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  componentDidMount(){
    this.getMovies();

    // 밑에 터미널 창에서 ---- npm i axios
    // js에서 data를 fetch하는 방법은 fetch를 사용함. 하지만 더 좋은 방법으론 Axios가 있음
    // axios는 fetch위에 있는 작은 layer같은 것
  }
  render(){
    const {isLoading} = this.state;
    return (
      <div>
        {/* {this.state.isLoading ? "Loading" : "We are ready"} */}
        
        {/* 위에 const {isLoading} = this.state; (ES6 코드)를 새로 작성하여 밑에 this.state를 더이상 안붙여도됨*/}
        {isLoading ? "Loading" : "We are ready"}
      </div>
    )
  }
}

export default App;