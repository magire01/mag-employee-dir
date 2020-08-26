import React, { Component } from "react";
import API from "../utils/API";
import UserRow from "./userRow"
import Wrapper from "./wrapper";


class List extends Component {
    state = {
    results: []
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

    renderContent = () => {
        return this.state.results.map(user => {
          return (
              <Wrapper>
                  <UserRow
                    key={user.login.uuid}
                    firstName={user.name.first}
                    lastName={user.name.last}
                    email={user.email}
                    birthday={user.dob.age}
                    image={user.picture.medium}
                    />
              </Wrapper>
            
          );
        });
      };
    

    render() {
        return (
            <div className="container">
                <h3> List </h3>
                {this.renderContent()}
            </div>
        )
    }
}

export default List;