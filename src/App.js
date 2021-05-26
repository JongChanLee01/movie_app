import React from 'react';
import PropTypes from "prop-types";

// component를 만들 때마다 모든 것을 다 구현하지 않기 위해서 extend from을 함
// react component에서 확장을 하였기 때문에 render method를 사용.
// function component는 함수이고 무언가를 return해야 함.
// class component는 class고 react component로 부터 확장됨.
// react는 자동적으로 모든 class component의 render method를 실행하고자 함
class App extends React.Component{
  // state는 object이고 component의 data를 넣을 공간이 있고 이 데이터는 변함
  state = {
    count: 0
  };

  // 이건 javascript코드임
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };

  render(){
    return (
      <div>
        <h1> I'm a class {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;