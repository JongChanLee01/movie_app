import React from 'react';

/* 
  food의 매개변수(props) 자리에 {fav} 를 넣은 이유는
  props object 내부에 fav가 있고 그 fav를 사용하기 위해서는 { }를 이용 해야함.
*/

// 밑에처럼 할수 도 있음.
// function Food(props) {
//   return <h1>I like {props.fav}</h1>
// }

// 위에랑 같은 소리임.
function Food({fav}) {
  return <h1>I like {fav}</h1>
}


function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      {/* 
        Food라는 component에 fav라는 이름의 property를 kimchi라는 value로 줌.
        component는 대문자로 시작해야 함.
      */}
      {/*
      component값은 밑에처럼 사용할 수 있음.
      <Food
        fav = "kimchi"
        something = {true}
        array = {["hello", 1, 2, 3, 4, true]}  
      />
      */}

      <Food fav = "kimchi" />
      <Food fav = "ramen" />
      <Food fav = "samgiopsal" />
      <Food fav = "chukumi" />
    </div>
  );
}

export default App;