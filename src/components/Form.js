import React, { useState } from "react";
import "../styles/Form.css";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    concur: true,
    selector: "",
    dropbox: ""
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Call to External API
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />

      <textarea
        value={formData.comments}
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
      />

      <fieldset>
        <legend>Select One Option From The List</legend>
        <input
          type="radio"
          id="option-1"
          name="selector"
          value="option-1"
          checked={formData.selector === "option-1"}
          onChange={handleChange}
        />
        <label htmlFor="option-1">Option 1</label>

        <input
          type="radio"
          id="option-2"
          name="selector"
          value="option-2"
          checked={formData.selector === "option-2"}
          onChange={handleChange}
        />
        <label htmlFor="option-2">Option 2</label>

        <input
          type="radio"
          id="option-3"
          name="selector"
          value="option-3"
          checked={formData.selector === "option-3"}
          onChange={handleChange}
        />
        <label htmlFor="option-3">Option 3</label>
      </fieldset>

      <label htmlFor="dropbox">Drop Down Menu</label>
      <select
        id="dropbox"
        value={formData.dropbox}
        onChange={handleChange}
        name="dropbox"
      >
        <option value="">Select an option</option>
        <option value="firstdrop">First</option>
        <option value="seconddrop">Second</option>
        <option value="thirddrop">Third</option>
      </select>

      <div className="checkbox">
        <input
          type="checkbox"
          id="concur"
          name="concur"
          checked={formData.concur}
          onChange={handleChange}
        />
        <label htmlFor="concur">you concur?</label>
      </div>
      <button>SEND</button>
    </form>
  );
}
