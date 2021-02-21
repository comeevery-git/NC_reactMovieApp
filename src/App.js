import React from "react";
import PropTypes from "prop-types";

// function component
// component : html을 반환하는 함수
// function App() {
//   return (
//     <div className="App">
//       {foodIList.map(dish => 
//         <Food
//          key={dish.id}
//          name={dish.name}
//          picture={dish.image}
//          insta={dish.insta} />
//       )}
//     </div>
//   );
// }

// class component = state
class App extends React.Component {
  constructor(props){
    super(props);
    console.log("start");
  }
  state = {
    // data, change
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count +1 }))
  };
  minus = () => {
    this.setState(current => ({ count: current.count -1 }))
  };
  componentDidMount(){
    console.log("component rended");
  }
  componentDidUpdate(){
    console.log("component update");
  }
  componentWillUnmount(){
    console.log("GoodBye, cruel world");
  }
  render(){
    console.log("ing render");
    return (
    <div>
      <h1>I AM CLASS {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

export default App;