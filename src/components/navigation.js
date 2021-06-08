import React from "react";
import {Link} from "react-router-dom";

// a 태그는 페이지가 새로고침이 됨.
// Link를 사용하면 새로고침이 없이 바뀜(Link는 라우터 밖에서는 사용할 수 없음. 라우터 안에서만 사용 해야함.)
function Navigation() {
    return (
        <div className="nav">
            <Link to= "/">Home</Link>
            <Link to= "/about">About</Link>
        </div>
    );
}

export default Navigation;