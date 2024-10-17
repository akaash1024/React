import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";


function createCard(contact) {
  return (
    <Card
      key={contact.id} //not for us
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      
      <Avatar img="https://media.licdn.com/dms/image/v2/D4D03AQFUKLBGx4dh_g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708163118924?e=1734566400&v=beta&t=9GDLWdE9ya7OfG22N0P5xu0f1i-6167hZkHXk4zv2rU" />

      {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
