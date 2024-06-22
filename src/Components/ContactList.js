import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
function ContactList(props) {
  const { contact, removeContact } = props;
  console.log(contact);
  const contactList = contact.map((val) => {
    return (
      <div className="contact-item">
        <div>{val.data.name}</div>
        <div>{val.data.email}</div>
        <span onClick={() => removeContact(val.id)}>
          <DeleteIcon />
        </span>
      </div>
    );
  });

  return (
    <div className="contact-list">
      <div className="contact-list-title">Contacts and Emails</div>
      <div>{contactList}</div>
    </div>
  );
}

export default ContactList;
