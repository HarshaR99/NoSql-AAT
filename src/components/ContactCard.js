import React from "react";
import user from "../images/user.png";
const ContactCard = (props) => {
    const {id,name,email} = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" style={{margin:"16px"}}/>
            <div className="content" style={{margin:"16px"}}>
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i 
            className="trash alternate outline icon"
            style={{color:"red", margin:"20px", float:"right", fontSize:20}}
            ></i>
            <i 
            className="edit outline icon"
            style={{color:"green", margin:"20px", float:"right", fontSize:20}}
            ></i>
        </div>
    );
};

export default ContactCard;