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
    render() {
        return (
            <>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">+</button>
            </>
        )
    }
    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero': count;
    }
}

