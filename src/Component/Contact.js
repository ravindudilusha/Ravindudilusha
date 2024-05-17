import React, { useState, useRef } from "react";
import "../Styles/Contact.css";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tz7011p', 'template_yytjnrs', form.current, {
        publicKey: 'rb-tkNIR9qlpcWK_s',
      })
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="Contactsection">
      <div className="container">
        <p className="Sectiontitle p-3">Contact</p>
        <div className="row p-4">
          <div className="col-6">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label className="formlabel" htmlFor="nameinput">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameinput"
                  name="user_name"
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
                  name="user_email"
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
                  name="user_message"
                ></textarea>
              </div>
              <button className="Submitbutton">Send Message</button>
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
            </form>
          </div>

          <div className="col-6">
            <div className="contactinfo">
              <div className="phonecontainer">
                <div className="phoneiconcontainer">
                  <div className="circle">
                    <FaPhone className="phone-icon" />
                  </div>
                </div>
                <div className="phonecontent">
                  <p className="phonenumberword">Phone number</p>
                  <a href="tel:+94771100242" className="phonenumber">+94 77 110 0242</a>
                </div>
              </div>
              <div className="phonecontainer">
                <div className="phoneiconcontainer">
                  <div className="circle">
                    <FaWhatsapp className="Whatsapp-icon" />
                  </div>
                </div>
                <div className="phonecontent">
                  <p className="phonenumberword">Whatsapp</p>
                  <a href="https://wa.me/+94771100242" className="phonenumber">+94 77 110 0242</a>
                </div>
              </div>
              <div className="emailcontainer">
                <div className="emailiconcontainer">
                  <div className="circle">
                    <MdOutlineMailOutline className="Mail-icon" />
                  </div>
                </div>
                <div className="phonecontent">
                  <p className="phonenumberword">Email</p>
                  <a href="mailto:ravindudilusha31@gmail.com" className="phonenumber">ravindudilusha31@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
