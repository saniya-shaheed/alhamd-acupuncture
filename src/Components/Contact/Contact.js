import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section className='contact-section p-3 pt-0'>
        <h1 className='display-2 pb-5 pt-5'> Contact Us</h1>
    <form class="g-3 pt-4">
        <div className='d-sm-flex justify-content-center'>
    <div class="col-sm-5 col-lg-4 pb-4 pe-1">
      <label for="firstName" class="form-label">First Name</label>
      <input type="text" class="form-control" id="firstName" placeholder="First Name" />
    </div>
    <div class="col-sm-5  col-lg-4 pb-4 ps-1">
      <label for="lastName" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="firstName" placeholder="Last Name" />
    </div>
    
    </div>
    <div className='d-flex justify-content-center'>
    <div class="col-12 col-sm-10 col-lg-8 pb-4">
      <label for="inputEmail4" class="form-label">Email Address</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder='example@example.com'/>
    </div>
    </div>
    <div className='d-flex justify-content-center'>
    <div class="col-12 col-sm-10 col-lg-8 pb-4">
    <label for="messageTextArea" class="form-label">Message</label>
  <textarea class="form-control" id="messageTextArea" aria-label="With textarea" rows="3" placeholder='Your Message here'></textarea>
</div>
</div>
<div class="col-12 pb-4 d-flex justify-content-center">
    <button type="submit" class="btn col-6 col-sm-4">Submit</button>
  </div>
  </form>
  </section>
  )
}

export default Contact

