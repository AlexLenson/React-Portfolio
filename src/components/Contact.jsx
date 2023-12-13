
import React, { useState } from 'react';
import validator from 'validator';
import emailjs from "emailjs-com"

function Contact() {
    const [formData, setFormData] = useState({name:"", email:"", message:""})
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [showAlert, setShowAlert] = useState(false)
    emailjs.init("SeFTcqj_NYRxSoTSb")

    const handleInputChange = (event) => {
        const{name,value} = event.target
        setFormData({...formData, [name]:value})
        setIsValidEmail(validator.isEmail(formData.email))
        console.log(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValidEmail) {
            console.log("email is valid");
        } else {
            setShowAlert("Please enter a valid email address")            
          
        }
        emailjs.send("service_yfxhdmf", "template_e98simn", {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message
        })
        .then((res) => {
            console.log("Email sent successfully:", res);
        })
        .catch((error) => {
            console.error("Error sending email:", error)
        })
    }

    return (
        <div className="contact-section">
            <h2 className="text-center">Contact Me</h2>
            <p className="text-center">Feel free to drop me a message!</p>
            {showAlert && (
                <div class="alert alert-danger" role="alert">
                    {showAlert}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Name:</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name="name" onChange={handleInputChange} placeholder="Enter your name here"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address:</label>
                    <input type="email" className="form-control" id="exampleFormControlInput2" name="email" onChange={handleInputChange} placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" onChange={handleInputChange}></textarea>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <button className="btn btn-dark">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
