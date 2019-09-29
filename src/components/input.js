import React, {Component} from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.checkData(e.target.value);
    }

    render() {
        return (
            <input onChange={this.handleChange} type="text" value={this.props.value}/>
        )
    }
}