import React, { Component } from 'react'



export default class Counter extends Component {
    
    styles={
        fontSize: 15,
        fontWeight: "bold"
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes
      }
    
    render() {
        return (
            <>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" onClick={()=>{this.props.onIncrement(this.props.counter.id)}}>+</button>
                <button className="btn btn-secondary btn-sm m-2" onClick={()=>{this.props.onDecrement(this.props.counter.id)}}>-</button>
                <button className="btn btn-danger btn-sm m-2" onClick={()=>{this.props.onDelete(this.props.counter.id)}}>delete</button>
            </>
        )
    }
    formatCount() {
        const count = this.props.counter.value;
        return count === 0 ? 'Zero': count;
    }
}

