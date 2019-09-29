import React, {Component} from 'react';

export default class HOCList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [
                'Ahmad',
                'raza',
                'ali',
                'raza',
                'husnain',
                'raza',
                'ahtasham',
                'saleem',
                'iqra',
                'saleem',
                'hania',
                'noor',
                'abdul',
                'wasay'
            ]
        };
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.names.filter(name => (
                            name.indexOf(this.props.search) > -1
                        )).map((name, index) => (
                            <li key={index}>{name}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}