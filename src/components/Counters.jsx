import React, { Component } from 'react';

import Counter from './Counter';

export default class Counters extends Component {
   
    render() {
        return (
            <>
            <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>Reset Counters</button>
            {
            this.props.counters.map(counter => 
            <Counter 
            key={counter.id} 
            onDelete={this.props.onDelete} 
            onIncrement={this.props.onIncrement} 
            onDecrement={this.props.onDecrement} 
            counter={{id:counter.id,value:counter.value}}
            />)
            }
            </>
        );
 }   
}

