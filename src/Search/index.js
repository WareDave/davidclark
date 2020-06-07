import React, { Component } from 'react';

class Search extends Component {
    state = {
        query: ''
    }

    updateQuery = (e) => {
        this.setState({
            query: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.query);
        this.props.getQuery(this.state.query);
    }
    
    
    render() {
        return(
            <form className="search-container">
                <input type="text" name="query" placeholder="Powered by Giphy" onChange={this.updateQuery}></input>
                <button onClick={this.handleSubmit}>Search</button>
            </form>
        )
    }
}

export default Search;