import React from 'react';
import {
  ContactBackground,
  ContactH3,
  Box,
  UserInfo,
  Field,
  TextBox,
  BtnContainer,
  Button
} from '.././styledComponents/contact.style';

const Contact = () => {
  return (
    <ContactBackground>
      <ContactH3>Say Hello.</ContactH3>
      <Box>
        <form
          style={{width: 100 + '%'}}
          method="post" action="https://formspree.io/jason.stickel@live.com"
        >

          <UserInfo>
            <Field type="text" name="name" placeholder="Name" />

            <Field type="email" name="_replyto" placeholder="Email" />
          </UserInfo>

          <TextBox className="field" name="message" placeholder="Message" rows="6" />

          <BtnContainer>
            <Button type="submit" value="Send Message" />
          </BtnContainer>
        </form>
      </Box>
    </ContactBackground>
  );
}

export default Contact;
