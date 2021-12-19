import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "2", "name": "Madhukesh Bhatt M", "email": "madhu@gmail.com",
    },
    {
      id: "3", "name": "Arbaz Ahamed", "email": "arbaz@gmail.com",
    },
    {
      id: "4", "name": "Harsh", "email": "harsha@gmail.com",
    },{
      id: "1", "name": "Nikhil Gowda", "email": "nikhianad@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
