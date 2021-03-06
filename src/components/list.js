import React, { Component } from "react";
import API from "../utils/API";
import UserRow from "./userRow"
import Wrapper from "./wrapper";


class List extends Component {
    state = {
    results: [],
    searchResults: []
    }

    componentDidMount() {
        this.getPeople();
    }

    getPeople = () => {
        API.getData().then(res => {
            this.setState({ results: res.data.results });
            // console.log(this.state.results);
        })
        .catch(err => console.log(err));
    }

    sortByName = () => {
        const sortedResults = this.state.results;
        sortedResults.sort((a, b) => {
            if (a.name.first < b.name.first) {
                return -1;
            } else if (a.name.first > b.name.first) {
                return 1;
            } else {
                return 0;
            }
        })
        this.setState({ results: sortedResults });
        
    }

    sortByAge = () => {
        const sortedResults = this.state.results;
        sortedResults.sort((a, b) => {
            if (a.dob.age < b.dob.age) {
                return -1;
            } else if (a.dob.age > b.dob.age) {
                return 1;
            } else {
                return 0;
            }
        })
        this.setState({ results: sortedResults });
        
    }

    searchByName = (evt) => {
        const allResults = this.state.results;
        let searchValue = evt.target.value;
        allResults.filter(result => {
            if(searchValue === result.name.first) {
                return this.setState({ searchResults: result });
            }
        });
        this.renderSearch();
    }



    renderContent = () => {
        return this.state.results.map(user => {
          return (
              <Wrapper>
                  <UserRow
                    key={user.login.uuid}
                    firstName={user.name.first}
                    lastName={user.name.last}
                    email={user.email}
                    age={user.dob.age}
                    image={user.picture.medium}
                    />
              </Wrapper>
            
          );
        });
      };
    

    render() {
        return (
            <div className="container">
                <h3> Current Employees </h3>
                <div className ="row">
                    <div className="col-md-3">
                        <button className="btn btn-primary" onClick={this.sortByName}>Sort by Name</button>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary" onClick={this.sortByAge}>Sort by Age</button>
                    </div>
                </div>
                {this.renderContent()}
            </div>
        )
    }
}

export default List;