import React from "react";
import "./userRow.css"

const UserRow = props => {
    return (
        <>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.image} className="card-img" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{props.firstName} {props.lastName}</h3>
                            <p className="card-text"> Email: {props.email}</p>
                            <p className="card-text"> Age: {props.age}</p>
                        </div>
                    </div>

                </div>  
            </div>
        </>
    )
}

export default UserRow;