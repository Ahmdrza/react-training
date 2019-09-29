import React, {Component} from 'react';
import {connect} from 'react-redux';
import {INCREMENT, DECREMENT} from '../Counter/counterActionsList';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.decreaseCounter = this.decreaseCounter.bind(this);
        this.increaseCounter = this.increaseCounter.bind(this);
    }

    decreaseCounter() {
        this.props.dispatch({ type: DECREMENT });
    }

    increaseCounter() {
        this.props.dispatch({ type: INCREMENT });
    }

    render() {
        return (
            <div>
                <button onClick={this.decreaseCounter}>-</button> {this.props.count} <button onClick={this.increaseCounter}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.counter.count
});

export default connect(mapStateToProps)(Counter);