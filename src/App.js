import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import PropTypes from "prop-types";

function Food({name, picture, insta}){
  return (
    <div>
      <h1>I LIKE {name}!</h1>
      <h4>TEST IMG {picture}</h4>
      <h4>TEST INSTA {insta}</h4>
    </div>
  );
}

// npm i prop-types
// https://ko.reactjs.org/docs/typechecking-with-proptypes.html
Food.propTypes = {
  // 얻고 싶은 props 타입에 대한 설명
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  insta: PropTypes.string
}

const foodIList = [
  {
    id:1,
    name:"kimchi",
    image:"one",
    insta:"vnbn"
  },
  {
    id:2,
    name:"ramen",
    image:"two",
    insta:"acxc"
  },
  {
    id:3,
    name: "samgiopsal",
    image:"three",
    insta:"qpwe"
  },
  {
    id:4,
    name: "chukumi",
    image:"four",
    insta:"gdjsp"
  }
];

// component : html을 반환하는 함수
function App() {
  return (
    <div className="App">
      {foodIList.map(dish => 
        <Food
         key={dish.id}
         name={dish.name}
         picture={dish.image}
         insta={dish.insta} />
      )}
    </div>
  );
}

export default App;