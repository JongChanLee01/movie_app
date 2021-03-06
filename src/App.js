import React from "react";
import { HashRouter, Route} from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Detail from "./routes/detail";
import Navigation from "./components/navigation";
import "./App.css";


// 리엑트 라우터는 기본적으로 url을 가져옴
// 비교를 해서 매치가 되면 렌더링함

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      {/* :id를 붙여서 사용할수도 있음 */}
      <Route path="/movie/:id" component={Detail} />
      {/* <Route path="/movie-detail" component={Detail} /> */}
      {/* <Route path="/home">
        <h1>Home</h1>
      </Route>
      <Route path="/home/introduction">
        <h1>introduction</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route> */}
    </HashRouter>
  );
}

export default App;