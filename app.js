// import React from 'react';
// import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>    
      <h1>Grocery List App</h1>
      <input />
      <button>Add</button>
      <GroceryList groceries={["grapes", "lettuce", "cheese"]} />
    </div>
  );  
};

const GroceryList = (props) => {
  return (
    <ul>
      {props.groceries.map((item, id)=> (
        <GroceryItem key={id} item={item} />
      ))}
    </ul>
  )
};

class GroceryItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    }
  }

  handleClickDone() {
    this.setState({
      done: !this.state.done
    })
  }

  render() {

  const style = {
    textDecoration: this.state.done ? 'line-through' : 'none',
  };

    return (
      <li style={style} onClick={this.handleClickDone.bind(this)}>{this.props.item}</li>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));