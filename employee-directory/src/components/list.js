import React, { Component } from "react";
import API from "../utils/API";



class List extends Component {
    state = {
        results: []
    }

    getPeople = () => {
        API.getData().then(res => {
            this.setState({ results: res.data });
            console.log(this.state.results);
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="row">
                <h3 className="text-center">List</h3>
                <span> {this.getPeople(this.state.results)} </span>
            </div>
        )
    }
}

export default List;