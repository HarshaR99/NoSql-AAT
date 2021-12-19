import React from "react";

class AddContact extends React.Component {
    render() {
        return(
            <div className="ui main" style={{marginTop:"60px"}}>
                <h2>Add Patient</h2>
                <form className="ui form" style={{marginLeft:"20px"}}>
                <div className="field">
                    <label>Name</label>
                    <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    
                    />
                </div>
                <div className="field">
                    <label>Sex</label>
                    <input
                    type="text"
                    name="sex"
                    placeholder="Sex"
                    
                    />
                </div>
                <div className="field">
                    <label>Age</label>
                    <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    
                    />
                </div>
                <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;