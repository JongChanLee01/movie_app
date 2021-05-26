import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://img.hankyung.com/photo/202012/99.23222843.1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "ramen",
    image: "https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "samgiopsal",
    image: "https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "chukumi",
    image: "https://blog.kakaocdn.net/dn/dh9Dqr/btqzsWLoYqY/KgEhm09QyxfW29QfeWlkWk/img.png",
    rating: 4.7
  },
  {
    id: 5,
    name: "kimbap",
    image: "https://cdn.fneyefocus.com/news/photo/202105/15991_19264_5337.jpg",
    rating: 4.6
  },
]

/* 
  food의 매개변수(props) 자리에 {fav} 를 넣은 이유는
  props object 내부에 fav가 있고 그 fav를 사용하기 위해서는 { }를 이용 해야함.
*/

// 밑에처럼 할수 도 있음.
// function Food(props) {
//   return <h1>I like {props.fav}</h1>
// }

// 위에랑 같은 소리임.
// function Food({fav}) {
//   return <h1>I like {fav}</h1>
// }
function Food({name, picture, rating}) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt = {name}/>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

/* 
// ♠
function renderFood(dish) {
  //console.log(dish);
  return <Food key={dish.id} name={dish.name} picture={dish.image}/>
}
*/
Food.propTypes = {

}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      
      {/* ♠로 주석 처리한 부분하고 같은 것인데 에로우 함수로 하면 간단하게 가능! */}
      {/* 여기서 17번줄 Food 함수에서 보면 key 프롭스는 Food함수로 전달되지 않음 */}
      {/* 이것은 기본적으로 react 내부에서 사용하기 위함임 */}
      {foodILike.map(dish => (
          <Food
            key={dish.id}
            name = {dish.name}
            picture = {dish.image}
            rating = {dish.rating}
            />
        ))
      }
      {/* ♠ */}
      {/*
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
      */}



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

      {/* <Food fav = "kimchi" />
      <Food fav = "ramen" />
      <Food fav = "samgiopsal" />
      <Food fav = "chukumi" />
      <Food fav = "kimbap" /> */}
    </div>
  );
}

export default App;