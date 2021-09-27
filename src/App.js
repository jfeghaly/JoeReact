import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Counters from './components/Counters';



export default class App extends Component {
  state={
    counters:
        [{id: 1, value:0},
        {id: 2, value:0},
        {id: 3, value:0},
        {id: 4, value:0}]
    
}
handleIncrement = (counterId) =>{
  console.log(counterId);
    const counters=this.state.counters.map(item=> item.id === counterId? {id : item.id,value: item.value+1}: item );
    this.setState({counters});
}
handleDecrement = (counterId) =>{
    const counters=this.state.counters.map(item=> item.id === counterId? {id : item.id,value: item.value===0?item.value:item.value-1}: item );
    this.setState({counters});
}
handleReset=()=> {
    const counters=this.state.counters.map(c =>{ c.value=0;return c;});
    this.setState({counters});
}
handleDelete = (counterId)=>{
    this.setState({counters: this.state.counters.filter(item => item.id !== counterId)})
}
  render() {
    return (
      <>
      <Navbar totalCounters={this.state.counters.filter(counter=> counter.value !== 0).length}/>
      <main className="container">
        <Counters
        counters={this.state.counters}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onReset={this.handleReset}
        />
      </main>
    </>
    )
  }
}


