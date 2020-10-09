import React, { Component } from 'react'
var srcQry;
export class SearchItem extends Component {
    searchFuction = () => (
        srcQry = document.getElementById("search").value
        /*if(todo.title = srcQry){
            alert(srcQry + " was found.\n Description: " + todo.description + "\nAuthor: " + todo.author)
        }
        else{
            alert("Title was not found");
        }*/
    )
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default SearchItem
