import React, {Component} from 'react';
import List from './list';


export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:['this is item 1', 'this is item 2'],
            new_item:'',
            temp_item:'',
            temp_item_index:'',
        };
        this.removeItem = this.removeItem.bind(this);
        this.onChangeNewItem = this.onChangeNewItem.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.onChangeUpdateItem = this.onChangeUpdateItem.bind(this);
        this.finalUpdateItem = this.finalUpdateItem.bind(this);
    }
    
    static defaultProps = {
        disabled: false,
        text: 'Button'
    };

    removeItem(remove_index) {
        this.setState({
            items: this.state.items.filter((i, index) => index != remove_index )
        })
    }

    onChangeNewItem(e) {
        this.setState({new_item:e.target.value});
    }

    addNewItem() {
        if(this.state.new_item != '') {
            this.setState(previousState => ({
                items: [...previousState.items, this.state.new_item],
                new_item: ''
            }));
        } else {
            alert('Please enter something first!');
        }
    }

    updateItem(index) {
        this.setState({
            temp_item_index:index,
            temp_item:this.state.items[index]
        })
    }

    onChangeUpdateItem(e) {
        this.setState({temp_item:e.target.value})
    }

    finalUpdateItem() {
        let temp_items = this.state.items;
        temp_items[this.state.temp_item_index] = this.state.temp_item;
        this.setState({items:temp_items, temp_item:'', temp_item_index:''});
    }

    render() {
        return (
            <div>
                <input value={this.state.new_item} onChange={this.onChangeNewItem} /> <button onClick={this.addNewItem}>+</button>
                <List items={this.state.items} removeItem={this.removeItem} updateItem={this.updateItem} />
                { (this.state.temp_item_index !== '') ? 
                <div>
                    <input value={this.state.temp_item} onChange={this.onChangeUpdateItem} />
                    <button onClick={this.finalUpdateItem}>Update</button>
                </div> :''
                }
            </div>
        )
    }
}

