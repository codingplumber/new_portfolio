import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h3>Say Hello.</h3>
      <div className="box">
        <form method="post" action="https://formspree.io/jason.stickel@live.com">

          <input className="field" type="text" name="name" placeholder="Name" />

          <input className="field" type="email" name="_replyto" placeholder="Email" />

          <textarea className="field" name="message" placeholder="Message" rows="6"></textarea>

          <div className="button">
            <input type="submit" value="Send Message" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
