import React from 'react'
import SearchItem from './SearchItem'

export class Search extends React.Component{
    render() {
    return /*this.props.todos.map((todo) =>*/(
            <div>
            <input type="text" placeholder="Search" id="searchQuery"/>
                <button id="search" onClick={this.searchFuction}>Search</button>
            {
            //COULDNT GET SEARCH TO WORK
            //<SearchItem todo={todo}/>
            }
            </div>
        )//);
    }
}

export default Search
