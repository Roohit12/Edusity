import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f351fd5f-0c33-4021-abdc-a47297cdc280");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form 
               our contact information below . Your feedback , 
               questions, and suggestiono arer important to us as We
               strive to provide exceptional service to our university
               community.
            </p>
            <ul>
                <li> <img src={mail_icon} alt="" />Contact@gmail.com</li>
                <li> <img src={phone_icon} alt="" />+91 8865947756</li>
                <li> <img src={location_icon} alt="" />77 Massachusetts Ave , Cambridge <br/>
                 MA 02134 ,United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit} >
                <label >Your Name</label>
                <input type="text" name="name" required placeholder='Enter your name' />
                 <label > Phone Number</label>
                 <input type="tel" name="phone" required placeholder='Enter your mobile number'/>
                 <label >Write your message here</label>
                 <textarea name="message"  required rows="6" placeholder='Enter your message'></textarea>
                 <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /> </button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact