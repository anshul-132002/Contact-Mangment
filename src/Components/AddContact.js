import React, { useState } from "react";

function AddContact({addContact}) {
  const [contactData, setcontactData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setcontactData({ ...contactData, name: e.target.value });
    } else {
      setcontactData({ ...contactData, email: e.target.value });
    }
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (contactData.name === "" || contactData.email === "") {
      alert("pls fill the form");
      return;
    }
    addContact(contactData)
  };
  return (
    <div className="form">
      <div className="addcontact"> ADD CONTACT </div>
      <form>
        <label> Name </label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={contactData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label> Email </label>
        <br />
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={contactData.email}
          onChange={handleChange}
        required
        />
        <br />
        <button className="btn" onClick={handleAdd}>
          {" "}
          Add Button
        </button>
      </form>
    </div>
  );
}

export default AddContact;
