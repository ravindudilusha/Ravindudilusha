import React, { useState } from "react";
import "../Styles/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const handlenameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <div className="Contactsection">
      <div className="container">
        <p className="Sectiontitle p-3">Contact</p>
        <div className="row p-4">
          <div className="col-6">
            <form>
              <div className="form-group">
                <label className="formlabel" htmlFor="nameinput">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameinput"
                  value={name}
                  onChange={handlenameChange}
                />
              </div>

              <div className="form-group">
                <label className="formlabel" htmlFor="exampleFormControlInput1">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div className="form-group">
                <label
                  className="formlabel"
                  htmlFor="exampleFormControlTextarea1"
                >
                  Message
                </label>
                <textarea
                  className="form-control textareaform"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={textareaValue}
                  onChange={handleTextareaChange}
                ></textarea>
              </div>
              <button className="Submitbutton">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
