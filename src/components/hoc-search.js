import React, {Component} from 'react';

export const HOCSearch = (SearchInComponent) => {
    return class extends React.Component {
        state = {
            search:''
        }

        handleSearchChange = (event) => {
            this.setState({search:event.target.value});
        }

        render() {
            return (
                <div>
                    <h2>Search</h2>
                    <input type="text" onChange={this.handleSearchChange} value={this.state.search} />
                    <SearchInComponent search={this.state.search} />
                </div>
                
            )
        }
    }
}