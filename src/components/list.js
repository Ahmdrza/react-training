import React, {Component} from 'react';

export default class List extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.items.map((item, index) => (
                        <li key={index}>
                            {item} &nbsp;
                            <button onClick={this.props.updateItem.bind(null, index)}>e</button>
                            <button onClick={this.props.removeItem.bind(null, index)}>x</button>
                        </li>
                    ))                
                }
            </ul>
        )
    }
}