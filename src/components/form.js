import React, {Component} from 'react';
import Input from './input';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.checkData = this.checkData.bind(this);
    }

    checkData(val) {
        this.setState({value:val});
    }

    render() {
        return (
            <div>
                <Input value={this.state.value} checkData={this.checkData}/>
                {this.state.value}
            </div>
        )
    }
}