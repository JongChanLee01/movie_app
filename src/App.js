import React from 'react';

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
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false, book: true});
    }, 6000);
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