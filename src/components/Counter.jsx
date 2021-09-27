import React, { Component } from 'react'



export default class Counter extends Component {
    state={
        count: 1
    }
    styles={
        fontSize: 15,
        fontWeight: "bold"
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes
      }
    handleIncrement = () =>{
        console.log(this.state.count);
        this.setState({count: this.state.count+1});
    }
    render() {
        return (
            <>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>+</button>
            </>
        )
    }
    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero': count;
    }
}

